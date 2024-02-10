/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;

    // for(let i=0; i<nums.length; i++){

    //     if(i===0 && nums[i] > nums[i+1]) return i;
        
    //     if(i===nums.length-1 && nums[i]>nums[i-1]) return i;
        
    //     if(nums[i-1]<nums[i] && nums[i]> nums[i+1]) return i;

    // }
    
    let left = 0;
    let right = nums.length-1;

    while(left<right){

        let mid = Math.floor((right+left)/2);
        if(mid>0 && nums[mid] < nums[mid-1]) right = mid-1;
        else if(mid<nums.length-1 && nums[mid]<nums[mid+1]){
                  left = mid+1;
        }
        else{
            return mid;
        }
    }

    return left;

};