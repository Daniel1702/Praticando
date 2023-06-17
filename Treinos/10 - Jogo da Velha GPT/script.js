var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
var gameEnded = false;

var cells = document.getElementsByClassName('cell');
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleCellClick);
}

document.getElementById('reset').addEventListener('click', resetGame);

function handleCellClick() {
    var cellIndex = parseInt(this.id.split('-')[1]);

    if (board[cellIndex] === '' && !gameEnded) {
        board[cellIndex] = currentPlayer;
        this.textContent = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            gameEnded = true;
            setTimeout(function () {
                alert('Jogador ' + currentPlayer + ' venceu!');
                resetGame();
            }, 100);
            return;
        }
    }

    if (board.indexOf('') === -1) {
        gameEnded = true;
        setTimeout(function () {
            alert('Empate!');
            resetGame();
        }, 100);
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameEnded = false;

    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}
