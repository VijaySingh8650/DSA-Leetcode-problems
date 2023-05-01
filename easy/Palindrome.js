var isPalindrome = function(x) {

    // taking extra space by using array
    // let x1 = x.toString().split("");
    // let reverse = x.toString().split("").reverse();
    // for(let i=0;i<x1.length;i++){
    //     if(x1[i]!==reverse[i]) return false;

    // }
    // return true;

    //not taking any extra space
    let x1 = x.toString();
    let left = 0;
    let right = x1.length-1;
    while(left<right){
        if(x1[left]!==x1[right])return false;
        left++;
        right--;
    }
    return true;

};

console.log(isPalindrome(-121));