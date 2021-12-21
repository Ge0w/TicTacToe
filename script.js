const newGameButton = document.querySelector('#newgame')
const resetGameButton = document.querySelector('#reset')
const playerScreen = document.querySelector('#screen')
const gameCell = document.querySelectorAll('.gamecell');
const gameArray = ['','','','','','','','',''];
let p1Score = 0;
let p2Score = 0;

const gameBoard = (() => {
    const player1 = {
        name: '',
        marker: ''
    };
    const player2 = {
        name: '',
        marker: ''
    };
    const playersReady = false
    const playerMove = true;
    const checkWin = () => {
        if (gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2] && gameArray[0] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6] && gameArray[0] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8] && gameArray[0] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6] && gameArray[2] !== '') {
            if (gameArray[2] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7] && gameArray[1] !== '') {
            if (gameArray[1] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8] && gameArray[2] !== '') {
            if (gameArray[2] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5] && gameArray[3] !== '') {
            if (gameArray[3] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8] && gameArray[6] !== '') {
            if (gameArray[6] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
                <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
            }
        } else if (gameArray.every(e => e !== '')) {
            alert ('Draw!')
            displayController.resetBoard()
        }
    };
    return {
        gameArray,
        player1,
        p1Score,
        p2Score,
        player2,
        playersReady,
        playerMove,
        checkWin
    }
})();


const displayController = (() =>  {

    const resetBoard = (() => {
        const gameCell = document.querySelectorAll('.gamecell');
        for (let i = 0; i < gameArray.length; i++) {
            gameArray[i] = '';
            gameCell[i].innerHTML = '';
        }
        console.log(p1Score, p2Score)
    })

    const updateScore = () => {
        playerScreen.innerHTML = 
        `<h2><u>Score</u></h2>
        <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
        <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
    }

    const updateBoard = (e) => {
        if (gameBoard.playersReady === false) {
            alert('Enter player names')
        } else {
            const eleID = document.getElementById(e.target.id);
            const icon = document.createElement('i');
            const arrNum = e.target.id[e.target.id.length-1];
            if (gameArray[arrNum] !== '') {
                return
            } else if (gameBoard.playerMove === true && gameArray[arrNum] === '') {
                eleID.append(icon);
                console.log(gameArray)
                icon.classList.add('fas', 'fa-times', 'fa-10x');
                gameBoard.playerMove = false;
                gameArray[arrNum] = 'x';
                gameBoard.checkWin()
            } else {
                eleID.append(icon);
                console.log(gameArray)
                icon.classList.add('far', 'fa-circle', 'fa-10x')
                gameBoard.playerMove = true;
                gameArray[arrNum] = 'o';
                gameBoard.checkWin()
            }
        }
    }

    const newGame = (() => {
        const p1Value = document.querySelector('#player1').value;
        const p2Value = document.querySelector('#player2').value;
        gameBoard.player1 = playerFactory(`${p1Value}`, 'x');
        gameBoard.player2 = playerFactory(`${p2Value}`, 'o');
        gameBoard.playersReady = true;
        playerScreen.innerHTML = 
            `<h2><u>Score</u></h2>
            <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
            <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
        newGameButton.remove()
    });

    const resetGame = (() => {
        const gameCell = document.querySelectorAll('.gamecell');
        for (let i = 0; i < gameArray.length; i++) {
            gameArray[i] = '';
            gameCell[i].innerHTML = '';
        }
        p1Score = 0;
        p2Score = 0;
        playerScreen.innerHTML = 
        `<h2><u>Score</u></h2>
        <h2>${gameBoard.player1.name} <i class="fas fa-times"></i>: ${p1Score}</h2>
        <h2>${gameBoard.player2.name} <i class="far fa-circle"></i>: ${p2Score}</h2>`
    })

    return {resetBoard, updateBoard, newGame, updateScore, resetGame}
})();

const playerFactory = (name,marker) => {
    return {name, marker}
};

document.querySelector('#reset').addEventListener('click', () => {
    displayController.resetGame();
    });

for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', (e) => {
        displayController.updateBoard(e)
    })
}

newGameButton.addEventListener('click', () => {
    displayController.newGame()
})