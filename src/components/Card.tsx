import '.././Card.css';
import backCardImage from '../assets/images/back.png';

interface CardTypes {
  src: string;
  id: number;
}

interface CardProps {
  image: CardTypes;
  handleChoice: (card: CardTypes) => void;
  flipped: boolean;
  paired: boolean; 
}

const Card = ({ image, handleChoice, flipped, paired }: CardProps) => {
  const flipCard = () => {
    handleChoice(image);
  };

  return (
    <div className="card">
      <img
       
       className={`card-image ${paired ? 'paired' : ''}`}
        src={flipped ? image.src : backCardImage}
        alt={flipped ? 'front card' : 'back card'}
        onClick={flipCard}
      />
    </div>
  );
};

export default Card;
