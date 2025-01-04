/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {

    let stack = [];

    let left = 0;

    while(left<s.length){


        if(s[left]==="*" && stack.length > 0){
            
            stack.pop();

        }
        else if(s[left]!=="*"){
            
            stack.push(s[left]);

        }

        left++;

    }

    return stack.join("");
    
};