//1. Brute Force
var checkXMatrix = function (grid) {
   
    var k = 0;
    for(let i=0;i<grid.length;i++){
        if(i-k===0 && grid[i][k]===0)return false;
        if(i-k===0 && grid[i][k]!==0)grid[i][k]=0;
        k++;
    }
    k=0;
    for(let i=grid.length-1;i>=0;i--){
        if(i===k) {
            k++;
            continue;
        }
        if(grid[i][k]===0)return false;
        else{
            grid[i][k]=0;
        }
        k++;
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            if(grid[i][j]!==0) return false;
        }
    }
    // console.log(grid);
    return true;
    
};
//time complexity O(n**2);
//space complexity O(1);

//2. Better brute force
var checkXMatrix2 = function(grid) {
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid.length;j++){
            if(i===j || i+j+1===grid.length){
                if(grid[i][j]===0) return false;
            }
            else{
                if(grid[i][j]!==0) return false;
            }
        }
    }
    
    return true;
    
};
//time complexity O(n**2);
//space complexity O(1);