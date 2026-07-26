class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let result = 0;
       let n = s.length;
       let l = 0
       let map = new Map()

       for(let r = 0; r < n; r++){
        if(map.has(s[r])){
            l = Math.max(map.get(s[r]) + 1, l)
        }
        map.set(s[r], r)
        result = Math.max(result, r - l + 1)
       }
       return result
    }
}
