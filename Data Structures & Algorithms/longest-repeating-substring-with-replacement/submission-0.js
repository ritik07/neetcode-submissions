class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let n = s.length;


        for(let i = 0; i < n; i++){
            let count = new Map()
            let maxFreq = 0;
            for(let j = i; j < n; j++){
                count.set(s[j], (count.get(s[j]) || 0) + 1)
                maxFreq = Math.max(maxFreq, count.get(s[j]))
                let strLen = j - i + 1    
                if(strLen - maxFreq <= k){
                    res = Math.max(res, strLen)
                }
            }
        }

        return res
    }
}
