import CardContainer from '../components/CardContainer';
import Dropdown from '../components/Dropdown';
import { useEffect, useState } from 'react';
import { Hand, Card } from '../types';
import { getNewCardPool, getNewCardHand } from '../utils/apiUtils';


const Home = () => {
  const [cardsPerHand, setCardsPerHand] = useState<number>(5);
  const [numberOfHands, setNumberOfHands] = useState<number>(2);
  const [cardPool, setCardPool] = useState("");
  const [cardHands, setCardHands] = useState<Hand[]>([]);

  const retrieveNewCards = async () => {
    const res = await getNewCardPool()
    let deck = await res
    deck && setCardPool(deck);
    return;
  };

  const retrieveNewHands = async (deckId: string) => {
    let retrievedHand: Hand[] = []
    for (let i = 0; i < numberOfHands; i++) {
      const res = await getNewCardHand(deckId)
      if (retrievedHand.length < 1) {
        console.log("initial hand", res)
        retrievedHand.push(res)
        console.log("updated hand", retrievedHand)
      } else {
        retrievedHand.push(res)
        console.log("subsequent hands", res)
        console.log("updated hand", retrievedHand)
      }
    }
    return retrievedHand;
  };

  useEffect(() => {
    if (!cardPool) {
      retrieveNewCards();
    }
  })

  const shuffleCards = async () => {
    await retrieveNewCards();
    let newHand = await retrieveNewHands(cardPool);
    setCardHands(newHand)
    console.log("PLZ", newHand);
  }
  const handSizeOptions = [1, 2, 3, 4, 5];
  const handCountOptions = [1, 2, 3, 4];

  return (
    <div className="home container">
      <h2>Home Page</h2>
      <button className="button" onClick={shuffleCards}>SHUFFLE</button>
      <Dropdown options={handCountOptions} label={'How Many Hands?'} />
      <Dropdown options={handSizeOptions} label={'How Many Cards Per Hand?'} />
      <CardContainer hands={cardHands} />
    </div>
  )
}

export default Home;