const newGameButton = document.querySelector('#newgame')
const playerScreen = document.querySelector('#screen')
const gameCell = document.querySelectorAll('.gamecell');

const gameBoard = (() => {
    const gameArray = ['','','','','','','','',''];
    let p1Score = 0;
    let p2Score = 0;
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
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            }
        } else if (gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6] && gameArray[0] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            }
        } else if (gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8] && gameArray[0] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            }
        } else if (gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6] && gameArray[2] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            }
        } else if (gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7] && gameArray[1] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            }
        } else if (gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8] && gameArray[2] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            }
        } else if (gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5] && gameArray[3] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            }
        } else if (gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8] && gameArray[6] !== '') {
            if (gameArray[0] === 'x') {
                alert('Player 1 Wins!');
                displayController.resetBoard()
                p1Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
            } else {
                alert('Player 2 Wins!');
                displayController.resetBoard()
                p2Score++
                playerScreen.innerHTML = 
                `<h2><u>Score</u></h2>
                <h2>${gameBoard.player1.name}: ${p1Score}</h2>
                <h2>${gameBoard.player2.name}: ${p2Score}</h2>`
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
    const resetBoard = () => { 
        const gameCell = document.querySelectorAll('.gamecell');
        for (let i = 0; i < gameBoard.gameArray.length; i++) {
            gameBoard.gameArray[i] = '';
            gameCell[i].innerHTML = '';
        }
    }

    const updateScore = () => {
        playerScreen.innerHTML = 
        `<h2><u>Score</u></h2>
        <h2>${gameBoard.player1.name}: ${gameBoard.p1Score}</h2>
        <h2>${gameBoard.player2.name}: ${gameBoard.p2Score}</h2>`
    }

    const updateBoard = (e) => {
        if (gameBoard.playersReady === false) {
            alert('Enter player names')
        } else {
            const eleID = document.getElementById(e.target.id);
            const img = document.createElement('img');
            img.className = 'image';
            const arrNum = e.target.id[e.target.id.length-1];
            if (gameBoard.gameArray[arrNum] !== '') {
                return
            } else if (gameBoard.playerMove === true && gameBoard.gameArray[arrNum] === '') {
                eleID.append(img);
                img.src = 'cross.png';
                gameBoard.playerMove = false;
                gameBoard.gameArray[arrNum] = 'x';
                gameBoard.checkWin()
            } else {
                eleID.append(img);
                img.src = 'nought.png';
                gameBoard.playerMove = true;
                gameBoard.gameArray[arrNum] = 'o';
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
            <h2>${gameBoard.player1.name}: ${gameBoard.p1Score}</h2>
            <h2>${gameBoard.player2.name}: ${gameBoard.p2Score}</h2>`
    });

    return {resetBoard, updateBoard, newGame, updateScore}
})();

const playerFactory = (name,marker) => {
    return {name, marker}
};

document.querySelector('#reset').addEventListener('click', () => {
    displayController.resetBoard();
    });

for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', (e) => {
        displayController.updateBoard(e)
    })
}

newGameButton.addEventListener('click', () => {
    displayController.newGame()
})