import CardContainer from '../components/CardContainer';
import { useEffect, useState } from 'react';
import { getNewCardPool, getNewCardHand } from '../utils/apiUtils';

const Home = () => {
  const [numberOfHands, setNumberOfHands] = useState(1);
  const [cardPool, setCardPool] = useState({});
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

  return (
    <div>
      <h2>Home Page</h2>
      <CardContainer />
      <button className="button" onClick={retrieveNewCards}>SHUFFLE</button>
    </div>
  )
}

export default Home;