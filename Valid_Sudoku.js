var isValidSudoku = function(board) {
    var arr = new Set();
    for(let i=0;i<board.length;i++){
        
        for(let j=0;j<board.length;j++){
           var value= board[i][j];
            if(value!=="."){
                if(arr.has(value+"row"+i) || arr.has(value+"column"+j) ||       arr.has(value+"box"+Math.floor(i/3)+""+Math.floor(j/3))) return false;
            }
           
               arr.add(value+"row"+i);  
                arr.add(value+"column"+j);
                arr.add(value+"box"+Math.floor(i/3)+""+Math.floor(j/3))
            
        }
        
    }
    return true;
    
    //time compexity O(n**2);
    //space complexity will be O(n)
   
    
    
    
};