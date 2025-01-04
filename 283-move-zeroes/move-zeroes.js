/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

let left1 = 0;
let left2 = 1;

while(left1 < nums.length && left2<nums.length){

  if(nums[left1]===0){
    let value = nums[left1];
    nums[left1] = nums[left2];
    nums[left2]  = value;
    
  }
  if(nums[left1]!==0)left1++;

  left2++;
  
}
    
};