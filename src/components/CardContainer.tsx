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
  const handError = <p className=''>Whoops! Something's wrong with this hand. Try spinning again!</p>
  return (
    <div className='columns hand-container'>
      {hand.length < 1 && handError}
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
  });

  const cardsEmptyState =
    <article className="empty-state message is-info is-large">
      <div className="message-header">
        <p>Shuffle Some Cards</p>
      </div>
      <div className="message-body">
        Select how many hands of cards and cards per hand you would like using the dropdown and then hit the <strong>SHUFFLE</strong> button to get started.
      </div>
    </article>

  return (
    <div className='card-container is-flex-direction-column'>
      {currentHands.length < 1 && cardsEmptyState}
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