import CardContainer from '../components/CardContainer';
import { useEffect } from 'react';
import { getNewCardPool } from '../utils/apiUtils';

const Home = () => {
  useEffect(() => {
    getNewCardPool();
  })
  return (
    <div>
      <h2>Home Page</h2>
      <CardContainer />
    </div>
  )
}

export default Home;