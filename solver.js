var B = null;

// empty
var board = [
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,B,B,B],

]

// hardest
var board1 = [
    [B,B,5,3,B,B,B,B,B],
    [8,B,B,B,B,B,B,2,B],
    [B,7,B,B,1,B,5,B,B],
    [4,B,B,B,B,5,3,B,B],
    [B,1,B,B,7,B,B,B,6],
    [B,B,3,2,B,B,B,8,B],
    [B,6,B,5,B,B,B,B,9],
    [B,B,4,B,B,B,B,3,B],
    [B,B,B,B,B,9,7,B,B],

]


// easy
var board2 = [
    [2,7,4,B,9,1,B,B,5],
    [1,B,B,5,B,B,B,9,B],
    [6,B,B,B,B,3,2,8,B],
    [B,B,1,9,B,B,B,B,8],
    [B,B,5,1,B,B,6,B,B],
    [7,B,B,B,B,B,B,B,3],
    [4,B,2,B,B,B,B,B,9],
    [B,B,B,B,B,B,B,7,B],
    [8,B,B,3,4,9,B,B,B],

]

// easy
var board3 = [
    [7,B,B,4,2,B,9,B,1],
    [2,B,B,3,1,9,B,5,7],
    [B,9,3,7,5,6,8,B,4],
    [9,5,8,2,B,B,7,B,B],
    [4,B,B,B,B,B,B,B,B],
    [B,B,B,B,B,B,2,B,8],
    [5,4,6,1,B,7,B,9,B],
    [3,7,B,B,9,B,B,8,5],
    [8,B,B,5,4,B,B,B,B],

]

var allBoards = [board1, board2, board3]

window.onload = function() {
    setGame();
}

function setGame() {
    const random = Math.floor(Math.random()*allBoards.length)
    board = allBoards[random]
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

            if ( c == 2 || c == 5 || c == 8) {
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

            document.getElementById(r.toString()+ "-"+ c.toString()).value = board[r][c]

        }
    }


    let resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", function(){
        for (let r = 0; r<9; r++) {
            for (let c =0; c<9; c++){
                document.getElementById(r.toString()+ "-"+ c.toString()).value = null

            }
        }
    })

    let solveButton = document.getElementById("solve")
    solveButton.addEventListener("click", function(){
        document.getElementById("error").innerText = ""

        for (let r = 0; r<9; r++) {
            for (let c =0; c<9; c++){
                const singleSlot = document.getElementById(r.toString()+ "-"+ c.toString()).value

            if (singleSlot == ""){
                    board[r][c] = null
                  
                } else if (singleSlot ==1){
                    board[r][c] = 1
                
                } else if (singleSlot ==2){
                    board[r][c] = 2
                
                }else if (singleSlot ==3){
                    board[r][c] = 3
                
                }else if (singleSlot ==4){
                    board[r][c] = 4
                
                }else if (singleSlot ==5){
                    board[r][c] = 5
                
                }else if (singleSlot ==6){
                    board[r][c] = 6
                
                }else if (singleSlot ==7){
                    board[r][c] = 7
                
                }else if (singleSlot ==8){
                    board[r][c] = 8
                
                }else if (singleSlot ==9){
                    board[r][c] = 9
                
                } else {
                    document.getElementById("error").innerText = "invalid input"
                    board[r][c] = 11
                }
        }

        }
        
        // must have it here for it to solve random for every solve click
        //const random = Math.floor(Math.random()*allBoards.length)

        solve(board)    
    })
}


function solve(board) {
    if (isSolved(board)) {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                document.getElementById(r.toString() + "-" + c.toString()).value = board[r][c];

            }
        }
    
        return board    
    } else {
        return solvePossibleBoards(nextBoards(board))
 
    }
}

function solvePossibleBoards(boards) {
    if (boards === undefined || boards.length == 0) {
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


function isSolved(board) {

    for(var i=0; i<9; i++) {
        for(var a=0; a<9; a++){

            if (board[i][a] == null || board[i][a] == 11) {
                return false
            } 
    
        }
    }
    return true
}

function nextBoards(board) {
    const fb = findBlank(board)
    const f = fill(fb, board)
    return keepValids(f)
}

function findBlank(board) {
    if (board.length==0) {
        return console.error("Board didn't have blank space");
    } else {
        for(var i=0; i<9; i++ ){
            for (var a=0; a<9; a++){
                if (board[i][a] == null) {
                    return [i, a]
                }
            }
        }
    }
}

function fill(p, board) {
    const y = p[0]
    const x = p[1]

    var list = []
    for (var i = 1; i<=9; i ++) {
        var newBoard = [...board]
        var row = [...newBoard[y]]
        row[x] = i
        newBoard[y] = row
        list.push(newBoard)
    }
    return list

}


function keepValids(boards) {
    let valids = []
    for (var i =0; i<boards.length; i++){
        if (validBoard(boards[i])) {
            valids.push(boards[i])
        }

    }
    return valids

}

function validBoard(board) {
    return validRowsAndCols(board) && validSqaure(board)
}


function validRowsAndCols(board) {
    for (var i = 0; i < 9; i++){
        var row = []
        var col = []
        for (var j = 0; j < 9; j++){
            if (row.includes(board[i][j]) || col.includes(board[j][i])){
                return false
            }

            if (board[i][j] != null){
                row.push(board[i][j])
            }
            if (board[j][i] !=null) {
                col.push(board[j][i])
            }
        }
    }
    return true

}

function validSqaure(board) {
    let boxes = [
        [[0,0], [0,1], [0,2], [1,0], [1,1],[1,2],[2,0],[2,1],[2,2]], //1

        [[0,3], [0,4], [0,5], [1,3], [1,4],[1,5],[2,3],[2,4],[2,5]],

        [[0,6], [0,7], [0,8], [1,6], [1,7],[1,8],[2,6],[2,7],[2,8]], //3

        [[3,0], [3,1], [3,2], [4,0], [4,1],[4,2],[5,0],[5,1],[5,2]],

        [[3,3], [3,4], [3,5], [4,3], [4,4],[4,5],[5,3],[5,4],[5,5]],

        [[3,6], [3,7], [3,8], [4,6], [4,7],[4,8],[5,6],[5,7],[5,8]], //6

        [[6,0], [6,1], [6,2], [7,0], [7,1],[7,2],[8,0],[8,1],[8,2]], 

        [[6,3], [6,4], [6,5], [7,3], [7,4],[7,5],[8,3],[8,4],[8,5]],

        [[6,6], [6,7], [6,8], [7,6], [7,7],[7,8],[8,6],[8,7],[8,8]], //9
    ]

    for (var i=0; i<9; i++){
        for (var i =0; i<9; i++){
            var square = []

            for (var a=0; a<9; a++){
                var boxValue = boxes[i][a]
                const first = boxValue[0]
                const second = boxValue[1]
                
    
                    if (square.includes(board[first][second])){
                        return false
                    } else if (board[first][second] != null){
                        square.push(board[first][second])
                    }
            }
        }
    }
    return true
}

console.log(solve(board1))


