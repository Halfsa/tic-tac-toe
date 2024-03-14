import React, {useRef, useState} from 'react';
import GameBoard from "./GameBoard";

function App() {
    //Gameboard változók
    const initialGameBoard = useRef<string[][]>([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    const [nextSymbol,setNextSymbol] = useState<"X"|"O">("X")
    //-----
    const [isEditable,setIsEditable] = useState(0)
    const firstPlayer = useRef("Player1");
    const secondPlayer = useRef("Player2");
    const logList = useRef<string[]>([]);
    function editNames(whose:number){
        setIsEditable(whose);
    }
    function saveName(){
        setIsEditable(0)
    }
    function changeCurrentOne(e:React.ChangeEvent<HTMLSpanElement>){
        if (!e.target.ariaCurrent){
            firstPlayer.current = e.target.innerText
        }
        console.log(firstPlayer.current)
    }
    function changeCurrentTwo(e:React.ChangeEvent<HTMLSpanElement>){
        if (!e.target.ariaCurrent){
            secondPlayer.current = e.target.innerText
        }
        console.log(secondPlayer.current)
    }
    /* GameBoard kódok*/

    function clickedThis(rowI:number,colI:number){
        const logs:string[] = logList.current;
        if (initialGameBoard.current[rowI][colI] ===''&& !calculateWinner(initialGameBoard.current)) {
            initialGameBoard.current[rowI][colI] = nextSymbol;
            setNextSymbol(nextSymbol === "X" ? "O" : "X")
            logs.push(`${nextSymbol === 'X'? firstPlayer.current: secondPlayer.current} marked [${rowI}] [${colI}] with ${nextSymbol}`);
            logList.current = logs;
            if (calculateWinner(initialGameBoard.current)){
                logs.push(`${calculateWinner(initialGameBoard.current) === 'X' ?firstPlayer.current: secondPlayer.current} has won the game!`)
                logList.current = logs;
            }
        }
    }

    //gameboard kódok vége
  return (
      <main>
        <div id="game-container">
            <ol id="players">
                <li>
                    <span className='player'>
                        <span contentEditable={isEditable === 1} onInput={changeCurrentOne} className='player-name'>{firstPlayer.current}</span>
                        <span className='player-symbol'>X</span>
                    </span>
                    <button onClick={isEditable===1?saveName:()=>editNames(1)} >{isEditable ===1? "Save":"Edit"}</button>
                </li>
                <li>
                    <span className='player'>
                        <span contentEditable={isEditable ===2} onInput={changeCurrentTwo} className='player-name'>{secondPlayer.current}</span>
                        <span className='player-symbol'>O</span>
                    </span>
                    <button onClick={isEditable===2?saveName:()=>editNames(2)}>{isEditable ===2? "Save":"Edit"}</button>
                </li>
            </ol>
            <GameBoard initialGameBoard={initialGameBoard.current} clickedThis={clickedThis}/>
        </div>
          <ol id="log">
              <li>Logs</li>
              {logList.current.map((log)=>{
                  return <li key={log}>{log}</li>;
              })}
          </ol>
      </main>
  );
    //calculateWinner function helye
    function calculateWinner(squares:string[][]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[Math.floor(a/3)][a%3] &&
                squares[Math.floor(a/3)][a%3] === squares[Math.floor(b/3)][b%3] &&
                squares[Math.floor(a/3)][a%3] === squares[Math.floor(c/3)][c%3])
            {
                return squares[Math.floor(a/3)][a%3];
            }
        }
        return null;
    }
}

export default App;
