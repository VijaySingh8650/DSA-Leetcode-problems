/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    //TC-O(n)
    // let left = 0;
    // while (left>=0 && left<nums.length){
    //     if(nums[left]===target)return left;
    //     left++;
    // }
    // return -1;

    // TC-log(n)
    let left =0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target) return mid;
        else if(nums[mid]>target)right=mid-1;
        else if(nums[mid]<target)left = mid+1;
    }
    return -1;
    
};