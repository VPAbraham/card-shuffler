import { Card } from '../types';
import '../styles/CardDisplay.scss';

type CardDisplayProps = {
  card: Card
}

const CardDisplay = ({ card }: CardDisplayProps) => {
  return (
    <figure className='card-display image column'>
      <img src={card.image} />
    </figure>
  )
}

export default CardDisplay;