import CardContainer from '../components/CardContainer';
import Dropdown from '../components/Dropdown';
import { useEffect, useState } from 'react';
import { getNewCardPool, getNewCardHand } from '../utils/apiUtils';

const Home = () => {
  const [numberOfHands, setNumberOfHands] = useState(3);
  const [cardPool, setCardPool] = useState("");
  const [cardHands, setCardHands] = useState([]);

  const retrieveNewCards = async () => {
    const deck = await getNewCardPool();
    deck && setCardPool(deck.deck_id);
    console.log("cardPool", cardPool);
    return;
  }

  const retrieveNewHands = async (deckId: string) => {
    for (let i = 0; i < numberOfHands; i++) {
      const hand = await getNewCardHand(deckId);
      console.log("SINGLE HAND", hand)
      // setCardHands({...cardHands, hand})
    }
  }
  const shuffleCards = async () => {
    await retrieveNewCards()
    retrieveNewHands(cardPool)
  }


  return (
    <div>
      <h2>Home Page</h2>
      <button className="button" onClick={shuffleCards}>SHUFFLE</button>
      <Dropdown />
      <CardContainer />
    </div>
  )
}

export default Home;