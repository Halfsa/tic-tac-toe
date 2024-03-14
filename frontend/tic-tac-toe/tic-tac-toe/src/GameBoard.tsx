import {useRef, useState} from "react";


interface Props{
    initialGameBoard:string[][];
    clickedThis:(rowIndex:number,ColumnIndex:number)=>void
}
function GameBoard(props:Props) {

    return (
        <ol id="game-board">
            {props.initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                        <button onClick={()=>props.clickedThis(rowIndex,columnIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );


}

export default GameBoard;
