import { Card } from '../types';
type CardDisplayProps = {
  card: Card
}

const CardDisplay = ({ card }: CardDisplayProps) => {
  return (
    <figure className='image column'>
      <img src={card.image} />
    </figure>
  )
}

export default CardDisplay;