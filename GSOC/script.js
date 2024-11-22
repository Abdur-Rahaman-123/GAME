let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById(`cell-${index}`).innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWin();
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`Player ${board[a]} wins!`);
            resetGame();
            return;
        }
    }

    if (!board.includes('')) {
        alert('It\'s a draw!');
        resetGame();
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = '';
    }
}
