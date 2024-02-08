/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    // TC-O(sqrt(n))
    // for(let i=1; i<=num;i++){
    //       if(i*i===num)return true;
    //       else if(i*i > num) return false;
    // }
    
    //TC- O(log(n))
    let left = 0;
    let right = num;
    while(left<=right){

        let mid = Math.floor((left+right)/2);
        if(mid*mid === num)return true;
        else if(mid*mid > num) right = mid-1;
        else if(mid*mid < num)  left = mid+1;

    }
    return false;
};