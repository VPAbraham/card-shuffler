import CardDisplay from './CardDisplay';
import { Hand, Card } from '../types';
import { useEffect, useState } from 'react';
import '../styles/CardContainer.scss';

type HandContainerProps = {
  hand: Hand
}

type CardContainerProps = {
  hands: Hand[]
}

const HandContainer = ({ hand }: HandContainerProps) => {
  return (
    <div className='columns hand-container'>
      {hand.map((card) => {
        return (
          <>
            <CardDisplay card={card} />
          </>
        )
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
    <div className='card-container is-flex-direction-column'>
      {currentHands.map((hand, index) => {
        return (
          <>
            <span className='tag is-large is-dark mb-1'>
              {`Hand ${index + 1}`}
            </span>
            <HandContainer hand={hand} />
          </>
        )
      })}
    </div>
  );
};

export default CardContainer;