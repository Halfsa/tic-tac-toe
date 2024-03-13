const initialGameBoard: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function GameBoard() {

    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                        <button>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );

}

export default GameBoard;
