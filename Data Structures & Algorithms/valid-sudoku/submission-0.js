class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
  let n = board.length
      for(let row = 0; row < n; row++){
        let seenMap = new Set();
        for(let i = 0; i < n; i++){
            if(board[row][i] === '.') continue
            if(seenMap.has(board[row][i])) return false
            seenMap.add(board[row][i])
        }
    }  

        
    for(let col = 0; col < n; col++){
        let seenMap = new Set();
        for(let i = 0; i < n; i++){
            if(board[i][col] === '.') continue
            if(seenMap.has(board[i][col])) return false
            seenMap.add(board[i][col])
        }
    }  

        for(let square = 0; square < 9; square++){
        let seenMap = new Set();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                let row = Math.floor(square/3) * 3 + i
                let col = square % 3 * 3 + j

                if(board[row][col] === ".") continue
                if(seenMap.has(board[row][col])) return false
                seenMap.add(board[row][col])
            }
        }
    }
  
    
    return true
    }
}
