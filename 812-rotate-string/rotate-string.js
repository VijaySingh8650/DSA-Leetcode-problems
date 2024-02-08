/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
   let newStr = s+s;
   if(newStr.includes(goal) && s.length===goal.length) return true;
   return false; 
};