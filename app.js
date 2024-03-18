let cells = document.querySelectorAll('.row > div');

var turn = 1;

cells.forEach((item) => {
    item.addEventListener('click', cellClicked);
});

function cellClicked(e) {

    if (turn == 1 && e.target.textContent == "") {
        e.target.textContent = "X";
        turn = 2;
    }
    else if (turn == 2 && e.target.textContent == "") {
        e.target.textContent = "O";
        turn = 1;
    }
    var winCheck = checkWin();

    if (winCheck == true) {
        clearBoard();
    }
    var check = checkBoard();
    if (check == 0) {
        alert("It's a tie!");
        clearBoard();
    }




}

function clearBoard() {
    cells.forEach((item) => {
        item.textContent = ""
    })
}

function checkBoard() {
    var boardFull = 9
    cells.forEach((item) => {
        if (item.textContent != "") {
            boardFull -= 1;
        }
    })
    return boardFull;
}

function checkWin() {
    var playerX = "X";
    var playerO = "O";
    if (cells[0].textContent == playerX && cells[1].textContent == playerX && cells[2].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    else if (cells[3].textContent == playerX && cells[4].textContent == playerX && cells[5].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    else if (cells[6].textContent == playerX && cells[7].textContent == playerX && cells[8].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    else if (cells[0].textContent == playerX && cells[3].textContent == playerX && cells[6].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    else if (cells[1].textContent == playerX && cells[4].textContent == playerX && cells[7].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    else if (cells[2].textContent == playerX && cells[5].textContent == playerX && cells[8].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    else if (cells[0].textContent == playerX && cells[4].textContent == playerX && cells[8].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    else if (cells[2].textContent == playerX && cells[4].textContent == playerX && cells[6].textContent == playerX) {
        alert("Player X Wins!")
        return true
    }
    // player "O" Now
    else if (cells[3].textContent == playerO && cells[4].textContent == playerO && cells[5].textContent == playerO) {
        alert("Player O Wins!")
        return true
    }
    else if (cells[6].textContent == playerO && cells[7].textContent == playerO && cells[8].textContent == playerO) {
        alert("Player O Wins!")
        return true
    }
    else if (cells[0].textContent == playerO && cells[3].textContent == playerO && cells[6].textContent == playerO) {
        alert("Player O Wins!")
        return true
    }
    else if (cells[1].textContent == playerO && cells[4].textContent == playerO && cells[7].textContent == playerO) {
        alert("Player O Wins!")
        return true
    }
    else if (cells[2].textContent == playerO && cells[5].textContent == playerO && cells[8].textContent == playerO) {
        alert("Player O Wins!")
        return true
    }
    else if (cells[0].textContent == playerO && cells[4].textContent == playerO && cells[8].textContent == playerO) {
        alert("Player O Wins!")
        return true
    }
    else if (cells[2].textContent == playerO && cells[4].textContent == playerO && cells[6].textContent == playerO) {
        alert("Player O Wins!")
        return true
    }
    else {
        return false
    }
}