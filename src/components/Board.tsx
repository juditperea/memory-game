import '.././Board.css';
import Card from './Card.tsx';

function Board() {
  //5 x 4 
  const cardsDisplay = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="board">
      {cardsDisplay.map((card) => (
        <Card key={card}/>
      ))}
    </div>
  );
}

export default Board;
