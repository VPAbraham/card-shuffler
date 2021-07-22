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
    const deck = await getNewCardPool();
    deck && setCardPool(deck);
    return;
  }

  const retrieveNewHands = async (deckId: string) => {
    for (let i = 0; i < numberOfHands; i++) {
      await getNewCardHand(deckId).then((res: Hand) => {
        if (!cardHands.length) {
          let result = [res]
          setCardHands(result)
        } else {
          let result = [...cardHands, res]
          setCardHands(result)
        }
      })
    }
  }

  useEffect(() => {
    if (!cardPool) {
      retrieveNewCards();
    }
  })

  const shuffleCards = () => {
    setCardHands([])
    retrieveNewCards();
    retrieveNewHands(cardPool);
  }
  const handSizeOptions = [1, 2, 3, 4, 5];
  const handCountOptions = [1, 2, 3, 4];

  return (
    <div className="container">
      <h2>Home Page</h2>
      <button className="button" onClick={shuffleCards}>SHUFFLE</button>
      <Dropdown options={handCountOptions} label={'How Many Hands?'} />
      <Dropdown options={handSizeOptions} label={'How Many Cards Per Hand?'} />
      <CardContainer />
    </div>
  )
}

export default Home;