import { CardProps } from '../types'
import '.././Card.css'
import backCardImage from '../assets/images/back.png'

const Card = ({ image, handleChoice, flipped, paired }: CardProps) => {

  const flipCard = () => {
    if (!flipped) {
      handleChoice(image)
    }
  }

  return (
    <div className="card" onClick={flipCard}>
      <img
        className={`card-image ${paired ? 'paired' : ''}`}
        src={flipped ? image.src : backCardImage}
      />
    </div>
  )
}

export default Card
