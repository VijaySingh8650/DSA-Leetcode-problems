var checkValid = function(matrix) {
    var N= matrix.length;
    var arr = new Set();
    for(i=0;i<N;i++){
        for(j=0;j<N;j++){
            var value = matrix[i][j];
            if(arr.has(value+"row"+i) || arr.has(value+"column"+j))return false;
            arr.add(value+"row"+i);
            arr.add(value+"column"+j);
        }
    }
    return true;
};
//time complexity O(n**2);
//space complexity O(n); will be less than n because we are stopping if it already have the certain value.