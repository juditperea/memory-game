import '.././Game.css'
import RestartButton from './RestartButton.tsx';
import Title from './Title.tsx';
import Board from './Board.tsx';
function App() {

  return (
    <>
      <Title/>
      <div>
        <Board/>
        <RestartButton/>
      </div>
    </>
  )
}

export default App
