/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

    //first approach
    // while(n>1){
    //     n = n/2;
    // }
    // if(n===1)return true;
    // return false;

    //second approach
    // if(n<=0) return false;
    // return (n&(n-1)) === 0;

    //third approach
    if(n===1) return true;
    if(n<1) return false;
    else return isPowerOfTwo(n/2);
};