/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let column = new Array(matrix?.[0]?.length).fill(1);

    for(let i=0; i<matrix.length; i++){
        if(matrix?.[i]?.includes(0)){
            for(let j=0; j<matrix?.[0]?.length; j++){
                if(matrix[i][j]===0){
                     column[j] = 0;
                }
                matrix[i][j]  = 0;
            }
        }
    }

     for(let i=0; i<column.length; i++){

      if(column[i]===0){
        for(let j=0; j<matrix.length;j++){
          matrix[j][i] = 0;
        }
      }

    }

  return matrix;


};