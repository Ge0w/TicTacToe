const gameBoard = (() => {
    const gameArray = ['','','','','','','','',''];
    const player1 = 'x';
    // player1.src = ('cross.png');
    const player2 = 'o';
    // player2.src = ('nought.png');
    const playerMove = true;
    const checkWin = () => {
        if (gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2] && gameArray[0] !== '') {
            alert('Winning!');
        } else if (gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6] && gameArray[0] !== '') {
            alert('Winning!');
        } else if (gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8] && gameArray[0] !== '') {
            alert('Winning!');
        } else if (gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6] && gameArray[2] !== '') {
            alert('Winning!');
        }
    };
    return {gameArray, player1, player2, playerMove, checkWin}
})();

/*
const displayController = (() =>  {

})();*/


const gameCell = document.querySelectorAll('.gamecell');
for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', e => {
        console.log(e)
        const eleID = document.getElementById(e.target.id);
        const arrNum = e.target.id[e.target.id.length-1];
        if (gameBoard.playerMove === true) {
            eleID.innerHTML = `<img class='image' src='cross.png'>`;
            gameBoard.playerMove = false;
            gameBoard.gameArray[arrNum] = 'x';
            gameBoard.checkWin()
        } else {
            eleID.innerHTML = `<img class='image' src='nought.png'>`;
            gameBoard.playerMove = true;
            gameBoard.gameArray[arrNum] = 'o';
            gameBoard.checkWin()
        }
        console.log(gameBoard.gameArray)
    });
}


const playerFactory = (name,marker) => {
    return {name, marker}
};
