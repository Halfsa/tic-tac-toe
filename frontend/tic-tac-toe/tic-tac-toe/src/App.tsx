import React from 'react';
import GameBoard from "./GameBoard";

function App() {
  return (
      <main>
        <div id="game-container">
            <ol id="players">
                <li>
                    <span className='player'>
                        <span className='player-name'>Player 1</span>
                        <span className='player-symbol'>X</span>
                    </span>
                    <button>Edit</button>
                </li>
                <li>
                    <span className='player'>
                        <span className='player-name'>Player 2</span>
                        <span className='player-symbol'>O</span>
                    </span>
                    <button>Edit</button>
                </li>
            </ol>
            <GameBoard/>
        </div>
          <div id="log">
              <li>LOG</li>
          </div>
      </main>
  );
}

export default App;
