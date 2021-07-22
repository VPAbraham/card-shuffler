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
  const handSizeOptions = [1, 2, 3, 4, 5];
  const handCountOptions = [1, 2, 3, 4];

  return (
    <div>
      <h2>Home Page</h2>
      <button className="button" onClick={shuffleCards}>SHUFFLE</button>
      <Dropdown options={handCountOptions} label={'How Many Hands?'} />
      <Dropdown options={handSizeOptions} label={'How Many Cards Per Hand?'} />
      <CardContainer />
    </div>
  )
}

export default Home;