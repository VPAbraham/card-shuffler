import { Card } from '../types';
type CardDisplayProps = {
  card: Card
}

const CardDisplay = ({ card }: CardDisplayProps) => {
  return (
    <figure className='image is-128x128'>
      <img src={card.image} />
    </figure>
  )
}

export default CardDisplay;