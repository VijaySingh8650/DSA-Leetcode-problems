/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    //TC-O(n)
    let left = 0;
    while (left>=0 && left<nums.length){
        if(nums[left]===target)return left;
        left++;
    }
    return -1;
    
};