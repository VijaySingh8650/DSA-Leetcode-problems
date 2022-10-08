//1. Brute Force Method
var longestPalindrome = function(s) {
    var max=0;
    var sum1 ="";
    for(var i=0;i<s.length;i++){ //n
        var sum="";
        for(var j=i;j<s.length;j++){ //n
            sum=sum+s[j];
            if(sum[0]===sum[sum.length-1]){
                var add="";
                for(k=sum.length-1;k>=0;k--){ // first time n times
                    add=add+sum[k];
                }
                if(sum===add && sum.length>max){
                    max=sum.length;
                    sum1=sum;
                }
            }
        }
    }
    return sum1;
};
//Time Complexity is O(n**3);
//Space Complexity O(1) as we are not taking extra array or object


// 2. Better Brute Force to reduce time complexity little bit 
var longestPalindrome2 = function(s) {
    var max=0;
    var sum1 ="";
    for(var i=0;i<s.length;i++){
        var sum="";
        for(var j=i;j<s.length;j++){
            sum=sum+s[j];
            if(sum[0]===sum[sum.length-1]){
                
                var left = 0;
                var right = sum.length-1;
                var palin = true;
                while(left<=right){ //less chance will be there if the whole string will be palindrome
                    if(sum[left]!==sum[right]){
                        palin = false;
                        break;
                    }else{
                        left++;
                        right--;
                    }
                }
                
                if(palin && sum.length>max){
                    max=sum.length;
                    sum1=sum;
                }
            }
        }
    }
    return sum1;
};
//Time Complexity is O(n**3);
//Space Complexity O(1) as we are not taking extra array or object


//3 this approach will take only O(n**2) time complexity & space complexity O(1)
var longestPalindrome2 = function (s) {
    if (!s) return null;
    
    var longest = "";
    for (i = 0; i < s.length; i++) {
        var oddPalindrome = expandChar(s, i, i);
        var evenPalindrome = expandChar(s, i, i + 1);
        if (longest.length < oddPalindrome.length) longest = oddPalindrome;
        if (longest.length < evenPalindrome.length) longest = evenPalindrome;
    }
    
    function expandChar(s, left, right) {
        var i = 0;
        while (s[left - i]  && s[left - i] === s[right + i]) i++;
        i--;
        return s.slice(left - i, right + i + 1);
    }
    
    
    return longest;
}