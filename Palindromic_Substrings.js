//1. Brute Force
var countSubstrings = function(s) {
    var count = 0;
    var N = s.length;
    for(i=0;i<N;i++){
        var str = "";
        for(j=i;j<N;j++){
            str+=s[j]+"";
            if(str[0]===str[str.length-1]){
                var left = 0;
                var right = str.length-1;
                var palin = true;
                while(left<=right){
                    if(str[left]!==str[right]){
                        palin = false;
                        break;
                    }
                    left++;
                    right--;
                }
                if(palin)count++;
            }
        }
    }
    return count;
};

//2. Better approach
var countSubstrings = function (s) {
    if (!s) return null;
    var count = 0;
    for (i = 0; i < s.length; i++) {
        count += expand(s, i, i);
        count += expand(s, i, i + 1);
        
    }
    function expand(s, left, right) {
        var add = 0;
        while (left >= 0 && right < s.length && s[left--] === s[right++]) add++;
        return add;
        
    }
    
    
    
    return count;
}
//time complexity O(n**2) & space complexity O(1)