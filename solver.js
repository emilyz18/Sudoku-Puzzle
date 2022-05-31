var B = null;

// empty
var board = [
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, B, B, B],

]

// hardest
const board1 = [
    [B, B, 5, 3, B, B, B, B, B],
    [8, B, B, B, B, B, B, 2, B],
    [B, 7, B, B, 1, B, 5, B, B],
    [4, B, B, B, B, 5, 3, B, B],
    [B, 1, B, B, 7, B, B, B, 6],
    [B, B, 3, 2, B, B, B, 8, B],
    [B, 6, B, 5, B, B, B, B, 9],
    [B, B, 4, B, B, B, B, 3, B],
    [B, B, B, B, B, 9, 7, B, B],
]


// easy
const board2 = [
    [2, 7, 4, B, 9, 1, B, B, 5],
    [1, B, B, 5, B, B, B, 9, B],
    [6, B, B, B, B, 3, 2, 8, B],
    [B, B, 1, 9, B, B, B, B, 8],
    [B, B, 5, 1, B, B, 6, B, B],
    [7, B, B, B, B, B, B, B, 3],
    [4, B, 2, B, B, B, B, B, 9],
    [B, B, B, B, B, B, B, 7, B],
    [8, B, B, 3, 4, 9, B, B, B],

]

// easy
const board3 = [
    [7, B, B, 4, 2, B, 9, B, 1],
    [2, B, B, 3, 1, 9, B, 5, 7],
    [B, 9, 3, 7, 5, 6, 8, B, 4],
    [9, 5, 8, 2, B, B, 7, B, B],
    [4, B, B, B, B, B, B, B, B],
    [B, B, B, B, B, B, 2, B, 8],
    [5, 4, 6, 1, B, 7, B, 9, B],
    [3, 7, B, B, 9, B, B, 8, 5],
    [8, B, B, 5, 4, B, B, B, B],

]

//medium
const board4 = [
    [1, 5, B, 2, B, 9, B, B, 4],
    [B, 4, B, B, B, 6, B, B, B],
    [B, B, B, B, 4, B, B, 6, 3],
    [B, 7, B, B, B, B, 8, B, 6],
    [6, B, B, B, B, B, B, B, 5],
    [2, B, 8, B, B, B, B, 1, B],
    [4, 6, B, B, 8, B, B, B, B],
    [B, B, B, 6, B, B, B, 7, B],
    [8, B, B, 5, B, 1, B, 4, 9],

]

//medium
const board5 = [
    [3, B, B, B, B, B, B, B, B],
    [6, 5, B, B, 1, B, B, 7, B],
    [B, B, 4, 2, B, 7, 5, B, B],
    [B, B, B, 9, B, B, B, B, B],
    [B, B, B, 7, B, B, B, B, 9],
    [B, 9, B, B, 6, 3, B, 4, 2],
    [1, 7, 5, B, 3, B, B, 6, 4],
    [B, 4, B, B, B, B, B, B, 5],
    [B, B, 8, B, B, B, B, B, B],

]

const board6 = [
    [B, B, B, 8, B, B, 4, 2, B],
    [5, B, B, 6, 7, B, B, B, B],
    [B, B, B, B, B, 9, B, B, 5],
    [7, 4, B, 1, B, B, B, B, B],
    [B, B, 9, B, 3, B, 7, B, B],
    [B, B, B, B, B, 7, B, 4, 8],
    [8, B, B, 4, B, B, B, B, B],
    [B, B, B, B, 9, 8, B, B, 3],
    [B, 9, 5, B, B, 3, B, B, B],

]





window.onload = function () {
    const allBoards = [board1, board2, board3, board4, board5, board6]
    board = allBoards[Math.floor(Math.random() * allBoards.length)]

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("input");
            tile.id = r.toString() + "-" + c.toString();
            tile.type = "number"
            tile.minLength = "1"
            tile.maxLength = "1"

            tile.min = "1"
            tile.max = "9"
            tile.classList.add("tile");

            if (r == 2 || r == 5 || r == 8) {
                tile.classList.add("bottom-line")
            }

            if (c == 2 || c == 5 || c == 8) {
                tile.classList.add("right-line")
            }

            if (r == 0) {
                tile.classList.add("top-line")
            }

            if (c == 0) {
                tile.classList.add("left-line")
            }

            if (board[r][c] != null) {
                tile.readOnly = true
                tile.classList.add("tile-start")
            }

            document.getElementById("board").append(tile);
            document.getElementById(r.toString() + "-" + c.toString()).value = board[r][c]
        }
    }
    setGame();
}

function setGame() {

    let newButtom = document.getElementById("New Game")

    newButtom.addEventListener("click", function () {
        document.getElementById("error").innerText = ""
        // hardest
        const board1 = [
            [B, B, 5, 3, B, B, B, B, B],
            [8, B, B, B, B, B, B, 2, B],
            [B, 7, B, B, 1, B, 5, B, B],
            [4, B, B, B, B, 5, 3, B, B],
            [B, 1, B, B, 7, B, B, B, 6],
            [B, B, 3, 2, B, B, B, 8, B],
            [B, 6, B, 5, B, B, B, B, 9],
            [B, B, 4, B, B, B, B, 3, B],
            [B, B, B, B, B, 9, 7, B, B],
        ]


        // easy
        const board2 = [
            [2, 7, 4, B, 9, 1, B, B, 5],
            [1, B, B, 5, B, B, B, 9, B],
            [6, B, B, B, B, 3, 2, 8, B],
            [B, B, 1, 9, B, B, B, B, 8],
            [B, B, 5, 1, B, B, 6, B, B],
            [7, B, B, B, B, B, B, B, 3],
            [4, B, 2, B, B, B, B, B, 9],
            [B, B, B, B, B, B, B, 7, B],
            [8, B, B, 3, 4, 9, B, B, B],

        ]

        // easy
        const board3 = [
            [7, B, B, 4, 2, B, 9, B, 1],
            [2, B, B, 3, 1, 9, B, 5, 7],
            [B, 9, 3, 7, 5, 6, 8, B, 4],
            [9, 5, 8, 2, B, B, 7, B, B],
            [4, B, B, B, B, B, B, B, B],
            [B, B, B, B, B, B, 2, B, 8],
            [5, 4, 6, 1, B, 7, B, 9, B],
            [3, 7, B, B, 9, B, B, 8, 5],
            [8, B, B, 5, 4, B, B, B, B],

        ]//medium
        const board4 = [
            [1, 5, B, 2, B, 9, B, B, 4],
            [B, 4, B, B, B, 6, B, B, B],
            [B, B, B, B, 4, B, B, 6, 3],
            [B, 7, B, B, B, B, 8, B, 6],
            [6, B, B, B, B, B, B, B, 5],
            [2, B, 8, B, B, B, B, 1, B],
            [4, 6, B, B, 8, B, B, B, B],
            [B, B, B, 6, B, B, B, 7, B],
            [8, B, B, 5, B, 1, B, 4, 9],

        ]

        //medium
        const board5 = [
            [3, B, B, B, B, B, B, B, B],
            [6, 5, B, B, 1, B, B, 7, B],
            [B, B, 4, 2, B, 7, 5, B, B],
            [B, B, B, 9, B, B, B, B, B],
            [B, B, B, 7, B, B, B, B, 9],
            [B, 9, B, B, 6, 3, B, 4, 2],
            [1, 7, 5, B, 3, B, B, 6, 4],
            [B, 4, B, B, B, B, B, B, 5],
            [B, B, 8, B, B, B, B, B, B],

        ]

        //hard
        const board6 = [
            [B, B, B, 8, B, B, 4, 2, B],
            [5, B, B, 6, 7, B, B, B, B],
            [B, B, B, B, B, 9, B, B, 5],
            [7, 4, B, 1, B, B, B, B, B],
            [B, B, 9, B, 3, B, 7, B, B],
            [B, B, B, B, B, 7, B, 4, 8],
            [8, B, B, 4, B, B, B, B, B],
            [B, B, B, B, 9, 8, B, B, 3],
            [B, 9, 5, B, B, 3, B, B, B],

        ]



        const allBoards = [board1, board2, board3, board4, board5, board6]
        //var board = board1
        board = allBoards[Math.floor(Math.random() * allBoards.length)]

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                document.getElementById(r.toString() + "-" + c.toString()).readOnly = false
                document.getElementById(r.toString() + "-" + c.toString()).classList.remove("tile-start")

                if (board[r][c] != null) {
                    document.getElementById(r.toString() + "-" + c.toString()).readOnly = true
                    document.getElementById(r.toString() + "-" + c.toString()).classList.add("tile-start")
                }

                document.getElementById(r.toString() + "-" + c.toString()).value = board[r][c]

            }
        }
    })

    let resetButtom = document.getElementById("reset")

    resetButtom.addEventListener("click", function () {
        document.getElementById("error").innerText = ""


        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                document.getElementById(r.toString() + "-" + c.toString()).value = board[r][c]
            }
        }
    })


    let emptyButtom = document.getElementById("clear board")
    emptyButtom.addEventListener("click", function () {
        document.getElementById("error").innerText = ""

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {

                document.getElementById(r.toString() + "-" + c.toString()).value = null
                document.getElementById(r.toString() + "-" + c.toString()).readOnly = false
                document.getElementById(r.toString() + "-" + c.toString()).classList.remove("tile-start")

                board = [
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                    [B, B, B, B, B, B, B, B, B],
                ]
            }
        }
    })

    let solveButton = document.getElementById("solve")
    solveButton.addEventListener("click", function () {
        document.getElementById("error").innerText = ""

        let tboard = board

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const singleSlot = document.getElementById(r.toString() + "-" + c.toString()).value

                if (singleSlot == "") {
                    board[r][c] = null

                } else if (singleSlot == 1) {
                    board[r][c] = 1

                } else if (singleSlot == 2) {
                    board[r][c] = 2

                } else if (singleSlot == 3) {
                    board[r][c] = 3

                } else if (singleSlot == 4) {
                    board[r][c] = 4

                } else if (singleSlot == 5) {
                    board[r][c] = 5

                } else if (singleSlot == 6) {
                    board[r][c] = 6

                } else if (singleSlot == 7) {
                    board[r][c] = 7

                } else if (singleSlot == 8) {
                    board[r][c] = 8

                } else if (singleSlot == 9) {
                    board[r][c] = 9

                } else {
                    document.getElementById("error").innerText = "invalid input"
                    board[r][c] = 11
                }

            }

        }

        solve(board)
        board = tboard


    })
}


function solve(localBoard) {
    if (isSolved(localBoard)) {
        document.getElementById("error").innerText = ""

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                document.getElementById(r.toString() + "-" + c.toString()).value = localBoard[r][c];
            }
        }

        return localBoard
    } else {
        return solvePossibleBoards(nextBoards(localBoard))

    }
}

function solvePossibleBoards(boards) {
    if (boards === undefined || boards.length == 0) {
        document.getElementById("error").innerText = "board not solvable"
        return false
    } else {
        var trySolve = solve(boards.shift())
        if (trySolve) {
            return trySolve
        } else {
            return solvePossibleBoards(boards)
        }
    }
}


function isSolved(localBoard) {

    for (var i = 0; i < 9; i++) {
        for (var a = 0; a < 9; a++) {

            if (localBoard[i][a] == null || localBoard[i][a] == 11) {
                return false
            }
        }
    }
    return true
}

function nextBoards(localBoard) {
    const fb = findBlank(localBoard)
    const f = fill(fb, localBoard)
    return keepValids(f)
}

function findBlank(localBoard) {
    if (localBoard.length == 0) {
        return console.error("Board didn't have blank space");
    } else {
        for (var i = 0; i < 9; i++) {
            for (var a = 0; a < 9; a++) {
                if (localBoard[i][a] == null) {
                    return [i, a]
                }
            }
        }
    }
}

function fill(p, localBoard) {
    const y = p[0]
    const x = p[1]

    var list = []
    for (var i = 1; i <= 9; i++) {
        var newBoard = [...localBoard]
        var row = [...newBoard[y]]
        row[x] = i
        newBoard[y] = row
        list.push(newBoard)
    }
    return list

}


function keepValids(boards) {
    let valids = []
    for (var i = 0; i < boards.length; i++) {
        if (validBoard(boards[i])) {
            valids.push(boards[i])
        }

    }
    return valids

}

function validBoard(localBoard) {
    return validRowsAndCols(localBoard) && validSqaure(localBoard)
}


function validRowsAndCols(localBoard) {
    for (var i = 0; i < 9; i++) {
        var row = []
        var col = []
        for (var j = 0; j < 9; j++) {
            if (row.includes(localBoard[i][j]) || col.includes(localBoard[j][i])) {
                return false
            }

            if (localBoard[i][j] != null) {
                row.push(localBoard[i][j])
            }
            if (localBoard[j][i] != null) {
                col.push(localBoard[j][i])
            }
        }
    }
    return true

}

function validSqaure(localBoard) {
    let boxes = [
        [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]], //1

        [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],

        [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]], //3

        [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],

        [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],

        [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]], //6

        [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],

        [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],

        [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]], //9
    ]

    for (var i = 0; i < 9; i++) {
        for (var i = 0; i < 9; i++) {
            var square = []

            for (var a = 0; a < 9; a++) {
                var boxValue = boxes[i][a]
                const first = boxValue[0]
                const second = boxValue[1]


                if (square.includes(localBoard[first][second])) {
                    return false
                } else if (localBoard[first][second] != null) {
                    square.push(localBoard[first][second])
                }
            }
        }
    }
    return true
}
