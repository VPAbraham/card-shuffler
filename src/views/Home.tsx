import CardContainer from '../components/CardContainer';
import { useEffect, useState } from 'react';
import { getNewCardPool, getNewCardHand } from '../utils/apiUtils';

const Home = () => {
  const [numberOfHands, setNumberOfHands] = useState(3);
  const [cardPool, setCardPool] = useState("");
  const [cardHands, setCardHands] = useState([]);

  // useEffect(() => {
  //   getNewCardPool();
  //   getNewCardHand();
  // })

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
      <CardContainer />
      <button className="button" onClick={shuffleCards}>SHUFFLE</button>
    </div>
  )
}

export default Home;