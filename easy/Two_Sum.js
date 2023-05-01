let twoSum = function(nums, target) {


    // ! optimised version TC - O(n) & SC - O(n)
    let N = nums.length;
    let map = new Map();
    for(let j=0; j<N; j++) {
      let know = target - nums[j];
      if(map.has(know)){
        return [map.get(know), j];
      }
      map.set(nums[j],j);
    }


    // let N = nums.length;
    // let map = {};
    // for(let j=0; j<N; j++) {
    //   let know = target - nums[j];
    //   if(map.hasOwnProperty(know)){
        
    //     return [map[know], j];
    //   }
    //   map[nums[j]] = j;
    
    // }


    // ! Brute force 
    // let N = nums?.length;
    // for(let i=0;i<N;i++){
    //     for(j=i+1;j<N;j++){
    //         if(nums[i]+nums[j]===target)return [i,j];
    //     }
    // }
};

console.log(twoSum([2,7,11,15], 9));