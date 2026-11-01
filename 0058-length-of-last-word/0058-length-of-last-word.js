/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
        let  i= s.length-1;
        while (i>=0 && s[i]===' '){
            i--;
        }
        let count = 0;
        while (i>=0 && s[i]!==' '){
            count++; 
            i--;

        }
        return count;
};