/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
     let row = grid.length-1;
     let column = 0;
     let count =0;
     while(row>=0 && column<grid[0].length){   
               if(grid[row][column]<0){
                   row--;
                   count+= grid[0].length - column;

               }
               else{
                   column++;
               }
     }
     return count;
};