/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let result = "";
    // brute force
    for(let i=0; i< (word1.length + word2.length); i++){

        if(word1[i]){
            result+= word1[i];
        }
        if(word2[i]){
           result+= word2[i];
        }

    }

    return result;
    
};