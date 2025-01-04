/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let left1 = 0;
    let left2 = 0;

    let count = 0;

    while(left1<s.length && left2<t.length){

        if(s[left1]===t[left2]){

            left1++;
            count++;
            left2++;

        }else left2++;
        

    }

    if(count===s.length)return true;
    return false;
};