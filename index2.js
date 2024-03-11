let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            document.getElementById('status').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Current player: ${currentPlayer}`;
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winConditions.some(condition => {
        return condition.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').textContent = 'Current player: X';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}
