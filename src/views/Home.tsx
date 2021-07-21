import CardContainer from '../components/CardContainer';
import { useEffect, useState } from 'react';
import { getNewCardPool, getNewCardHand } from '../utils/apiUtils';

const Home = () => {
  const [numberOfHands, setNumberOfHands] = useState(1);
  const [cardPool, setCardPool] = useState(null);
  const [cardHands, setCardHands] = useState([]);

  useEffect(() => {
    getNewCardPool();
    getNewCardHand();
  })

  const retrieveNewCards = async () => {
    const deckId = await getNewCardPool();
    console.log("deckID", deckId);
  }
  return (
    <div>
      <h2>Home Page</h2>
      <CardContainer />
    </div>
  )
}

export default Home;