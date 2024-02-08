/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let n1 = 0;
    let n2 = 0;
    let store = [];
    while(n1<nums1.length && n2<nums2.length){
        if(nums1[n1]===nums2[n2]) {
            store.push(nums1[n1]);
            n1++;
            n2++;
        }
        else if(nums1[n1]<nums2[n2])n1++;
        else if(nums1[n1]>nums2[n2])n2++;
    }
    return store;
};