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
  src: string;
  id: number;
}

const cardImages: Omit<CardTypes, 'id'>[] = [
  { src: image1h },
  { src: image2h },
  { src: image3h },
  { src: image4h },
  { src: image5h },
  { src: image7h },
  { src: image8h },
  { src: image9h },
  { src: image10h },
  { src: image11h }
];

const shuffleCards = (): CardTypes[] => {
  let id = 0;
  const doubledCardImages = [...cardImages, ...cardImages];
  const shuffledCards = doubledCardImages
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: id++ }));

  return shuffledCards;
};

const Board = () => {
  const [cards, setCards] = useState<CardTypes[]>([]);
  const [firstCard, setFirstCard] = useState<CardTypes | null>(null);
  const [secondCard, setSecondCard] = useState<CardTypes | null>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const restartGame = () => {
    setCards(shuffleCards());
    setFirstCard(null);
    setSecondCard(null);
  };

  const handleChoice = (card: CardTypes) => {
    if (!disabled) {
      if (firstCard) {
        setSecondCard(card);
      } else {
        setFirstCard(card);
      }
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        nextTurn();
      } else {
        setTimeout(() => nextTurn(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  const nextTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card}
          handleChoice={handleChoice}
          flipped={card === firstCard || card === secondCard}
        />
      ))}
      <button onClick={restartGame}>New game</button>
    </div>
  );
};

export default Board;
