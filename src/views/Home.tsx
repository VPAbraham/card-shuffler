import CardContainer from '../components/CardContainer';
import Dropdown from '../components/Dropdown';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import { Hand, Card } from '../types';
import { getNewCardPool, getNewCardHand } from '../utils/apiUtils';


const Home = () => {
  const [cardsPerHand, setCardsPerHand] = useState<number>(5);
  const [numberOfHands, setNumberOfHands] = useState<number>(4);
  const [cardPool, setCardPool] = useState("");
  const [cardHands, setCardHands] = useState<Hand[]>([]);
  const [shuffleDisabled, setShuffleDisabled] = useState<boolean>(false);

  const retrieveNewCards = async () => {
    const res = await getNewCardPool()
    let deck = await res
    deck && setCardPool(deck);
    return;
  };

  const retrieveNewHands = async (deckId: string) => {
    let retrievedHand: Hand[] = []
    for (let i = 0; i < numberOfHands; i++) {
      const res = await getNewCardHand(deckId, cardsPerHand)
      if (retrievedHand.length < 1) {
        retrievedHand.push(res)
      } else {
        retrievedHand.push(res)
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
  }
  const handSizeOptions = [1, 2, 3, 4, 5];
  const handCountOptions = [1, 2, 3, 4];
  const renderHandSizeDropDown = () => {
    return (
      <Dropdown
        options={handSizeOptions}
        label={'How Many Cards Per Hand?'}
        stateUpdate={setCardsPerHand}
      />
    )
  }
  const renderHandCountDropDown = () => {
    return (
      <Dropdown
        options={handCountOptions}
        label={'How Many Hands of Cards?'}
        stateUpdate={setNumberOfHands}
      />
    )
  }

  return (
    <div className="home container">
      <NavBar
        button={<button className="button" onClick={shuffleCards} disabled={shuffleDisabled} >SHUFFLE</button>}
        dropdown1={renderHandCountDropDown}
        dropdown2={renderHandSizeDropDown}
      />
      <CardContainer hands={cardHands} />
    </div>
  )
}

export default Home;