import { useState, useEffect } from 'react';
import { CardTypes } from '../types';
import ConfettiExplosion from 'react-confetti-explosion';
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

const cardImages = [
  { src: image1h },
  { src: image2h },
  { src: image3h },
  { src: image4h },
  { src: image5h },
  { src: image7h },
  { src: image8h },
  { src: image9h },
  { src: image10h },
  { src: image11h },
]

//here I change the value of the confetti props, this is optional if you want to change the style
const confettiProps = {
  force: 2,
  duration: 3500,
  particleCount: 500,
  width: 2000,
}

/* · put the images 2 times in an array(pair)
   · shuffle the images randomly in the array
   · give every card an id
*/
const shuffleCards = (): CardTypes[] => {
  let id = 0
  const duplicatedImagesArray = [...cardImages, ...cardImages]
  return duplicatedImagesArray
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: id++ }))
};

const Board = () => {
  const [cards, setCards] = useState<CardTypes[]>([])
  const [firstCardChoice, setFirstCardCChoice] = useState<CardTypes | null>(null)
  const [secondCardChoice, setSecondCardChoice] = useState<CardTypes | null>(null)
  const [isDisabled, setIsDisabled] = useState(false)
  const [pairs, setPairs] = useState<number[]>([])
  const [turns, setTurns] = useState(0)
  const [hasConfetti, setHasConfetti] = useState(false)

  useEffect(() => {
    setCards(shuffleCards())
  }, [])

  useEffect(() => {
    if (firstCardChoice && secondCardChoice) {
      setIsDisabled(true)
      if (firstCardChoice.src === secondCardChoice.src) {
        setPairs((prevPairs) => [...prevPairs, firstCardChoice.id, secondCardChoice.id])
        if (pairs.length + 2 === cards.length) {
          setHasConfetti(true)
        }
        resetTurn()
      } else {
        setTimeout(resetTurn, 500)
      }
    }
  }, [firstCardChoice, secondCardChoice])

  const resetTurn = () => {
    setFirstCardCChoice(null)
    setSecondCardChoice(null)
    setIsDisabled(false)
    setTurns((prevTurns) => prevTurns + 1)
  };

  const handleCardChoice = (card: CardTypes) => {
    if (!isDisabled) {
      firstCardChoice ? setSecondCardChoice(card) : setFirstCardCChoice(card)
    }
  };

  const restartGame = () => {
    setCards(shuffleCards())
    setFirstCardCChoice(null)
    setSecondCardChoice(null)
    setPairs([])
    setTurns(0)
    setHasConfetti(false)
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card}
          handleChoice={handleCardChoice}
          flipped={card === firstCardChoice || card === secondCardChoice || pairs.includes(card.id)}
          paired={pairs.includes(card.id)}
        />
      ))}
      <button onClick={restartGame}>New game</button>
      <div className="turns">Turns: {turns}</div>
      {hasConfetti && <ConfettiExplosion {...confettiProps} />}
    </div>
  )
}

export default Board
