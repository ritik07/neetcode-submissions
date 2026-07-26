class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let result = 0;
       let n = s.length;

       for(let i = 0; i < n; i++){
        let set = new Set()
        for(let j = i; j < n; j++){
            if(set.has(s[j])){
                break
            }
            set.add(s[j])
            result = Math.max(result, j - i + 1)
        }
       }
       return result
    }
}
