import CardContainer from '../components/CardContainer';
import { useEffect } from 'react';
import { getCardPool } from '../utils/apiUtils';

const Home = () => {
  useEffect(() => {
    getCardPool();
  })
  return (
    <div>
      <h2>Home Page</h2>
      <CardContainer />
    </div>
  )
}

export default Home;