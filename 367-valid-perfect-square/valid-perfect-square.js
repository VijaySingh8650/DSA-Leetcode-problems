/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    for(let i=1; i<=num;i++){
          if(i*i===num)return true;
          else if(i*i > num) return false;
    }
    
};