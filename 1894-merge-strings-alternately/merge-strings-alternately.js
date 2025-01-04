/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let result = "";
    
    // brute force
    // for(let i=0; i< (word1.length + word2.length); i++){ // TC - O(n+m) SC - (1)

    //     if(word1[i]){
    //         result+= word1[i];
    //     }
    //     if(word2[i]){
    //        result+= word2[i];
    //     }

    // }

    // return result;
   

   //Optimised approach - Two pointer
   let left1 = 0;
   let left2 = 0;

   while(left1<word1.length || left2<word2.length){

        if(word1[left1] && word2[left2]){
            result += word1[left1] + word2[left2];
            left1++;
            left2++;
        }
        else if(word1[left1]){
            result += word1[left1];
            left1++;

        }
        else{

            result += word2[left2];
            left2++;

        }
   }

   return result;

    
};