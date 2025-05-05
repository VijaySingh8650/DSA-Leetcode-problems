/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let N = matrix.length;
    let M = matrix[0].length;
    let col = new Array(M);

    for(let i=0; i<N; i++){
        if(matrix[i].includes(0)){
            for(let j=0; j<M; j++){
                if(matrix[i][j]===0)col[j] = true;
                matrix[i][j] = 0;
            }
        }
    }

    for(let i=0; i<M; i++){
        if(col[i]){
            for(let j=0; j<N; j++){
                matrix[j][i] = 0;
            }
        }
    }
    
};