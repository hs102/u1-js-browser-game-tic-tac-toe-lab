/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/

let board 
let turn 
let winner 
let tie 

/*------------------------ Cached Element References ------------------------*/

const resetBtnEl = document.getElementById('reset')



/*-------------------------------- Functions --------------------------------*/

function init() {
  board = ['', '', '', '', '', '', '', '', ''] 
  turn = 'X' 
  winner = false 
  tie = false 
  render()
}

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    squareEls.forEach((square, idx) => {
        square.textContent = board[idx]
        square.classList.remove('X', 'O')
        if (board[idx] === 'X') {
            square.classList.add('X')
        } else if (board[idx] === 'O') {
            square.classList.add('O')
        }
    })
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `${turn}'s turn cmon play hurry up noob`
    } else if (winner === false && tie === true) {
    messageEl.textContent = `you tied, both of u suck!`
    } else {
    messageEl.textContent = `${winner} u won congratz `
  }
}


function handleClick(event) {
    const squareIndex = parseInt(event.target.id);

    if (board[squareIndex] !== '' || winner !== false || tie !== false) {
        return;
    }
    
    board[squareIndex] = turn;

    checkForWinner(); 
    checkForTie();    

    switchPlayerTurn();

    render();
}




function placePiece(index) {
    if (board[index] !== '' || winner) {
        return
    }
    
    board[index] = turn
    
}

function checkForWinner() {
    
    if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
        winner = board[0]
    }
    if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
        winner = board[3]
    }
    if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
        winner = board[6]
    }
    
    if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
        winner = board[0]
    }
    if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
        winner = board[1]
    }
    if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
        winner = board[2]
    }
    
    
    if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
        winner = board[0]
    }
    if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
        winner = board[2]
    }
    
    console.log("Winner:", winner)
}

function checkForTie() {
        if (winner === false && !board.includes('')) {
                tie = true
        }
}





function switchPlayerTurn() {
    if (winner) {
        return;
    }
    
    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
    console.log("Current turn:", turn);
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})


resetBtnEl.addEventListener('click', init)


init()  
// this  is what starts the whole game a few letters yet very powerful and the whole code wont work without it
