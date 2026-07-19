class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let n = s.length;
        let l = 0;
        let r = n - 1

        function validAlpaNumaricValue(char){
            return (
                (char >= 'A' && char <= "Z") ||
                (char >= 'a' && char <= 'z') ||
                (char >= '0' && char <= '9') 
            )
        }
        

        while(l < r){
            if(!validAlpaNumaricValue(s[l])){
                l++
                continue
            }
            if(!validAlpaNumaricValue(s[r])){
                r--
                continue
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false
            l++
            r--
        }

        return true
    }
}
