/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     //brute force approach
    //  for(let i=0; i<nums.length-1; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i]===nums[j]){
    //             return true;
    //         }
    //     }
    //  }
    //  return false;


     //optimised approach
     let map = new Map(); 

     for(let i=0; i<nums.length; i++){
        if(map.has(nums[i]))return true;
        map.set(nums[i], i);
     }

     return false;
};