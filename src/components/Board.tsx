import { useState, useEffect } from 'react';
import Card from './Card';
import '.././Board.css';
import '.././Button.css';
import image1h from '../assets/images/killua.jpeg';
import image2h from '../assets/images/2h.png';
import image3h from '../assets/images/3h.png';
import image4h from '../assets/images/4h.png';
import image5h from '../assets/images/5h.png';
import image7h from '../assets/images/7h.png';
import image8h from '../assets/images/8h.png';
import image9h from '../assets/images/9h.png';
import image10h from '../assets/images/10h.png';
import image11h from '../assets/images/11h.png';

interface CardTypes {
  id: number;
  src: string;
}

const cardImages: CardTypes[] = [
  { id: 1, src: image1h },
  { id: 2, src: image2h },
  { id: 3, src: image3h },
  { id: 4, src: image4h },
  { id: 5, src: image5h },
  { id: 6, src: image7h },
  { id: 7, src: image8h },
  { id: 8, src: image9h },
  { id: 9, src: image10h },
  { id: 10, src: image11h }
];

const shuffleCards = (): CardTypes[] => {
  const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    
  return shuffledCards;
}
console.log(shuffleCards)
function Board() {
  const [cards, setCards] = useState<CardTypes[]>([]);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const restartGame = () => {
    setCards(shuffleCards());
  };
console.log(cards)
  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} image={card} />
      ))}
      <button onClick={restartGame}>Restart game</button>
    </div>
  );
}

export default Board;
