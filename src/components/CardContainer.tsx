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
  console.log("SINGLE HAND", hand)
  const renderCards = (hand: Hand) => {
    return (
      hand.map((card) => {
        <CardDisplay card={card} />
      })
    )
  }
  return (
    <div className='hand-container box'>
      {hand && renderCards(hand)}
    </div>
  );
  ;
}

const CardContainer = ({ hands }: CardContainerProps) => {
  const [currentHands, setCurrentHands] = useState<Hand[]>([]);

  useEffect(() => {
    setCurrentHands(hands);
  })
  const renderHands = (currentHands: Hand[]) => {
    return (
      currentHands.map((hand) => {
        <HandContainer hand={hand} />
      })
    )
  }

  return (
    <div className='box'>
      {currentHands.map((hand) => {
        return (<HandContainer hand={hand} />)
      })}
    </div>
  );
};

export default CardContainer;