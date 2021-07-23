import CardDisplay from './CardDisplay';
import { Hand, Card } from '../types';
import { useEffect, useState } from 'react';

type HandContainerProps = {
  hand: Hand
}

type CardContainerProps = {
  hands: Hand[]
}

const HandContainer = ({ hand }: HandContainerProps) => {
  return (
    <div className='tile hand-container is-flex'>
      {hand.map((card) => {
        return (<CardDisplay card={card} />)
      })}
    </div>
  );
  ;
}

const CardContainer = ({ hands }: CardContainerProps) => {
  const [currentHands, setCurrentHands] = useState<Hand[]>([]);

  useEffect(() => {
    setCurrentHands(hands);
  })

  return (
    <div className='tile is-ancestor is-vertical'>
      {currentHands.map((hand) => {
        return (<HandContainer hand={hand} />)
      })}
    </div>
  );
};

export default CardContainer;