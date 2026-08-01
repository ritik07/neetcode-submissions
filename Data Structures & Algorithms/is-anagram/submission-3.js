class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false


        let sFreq = {};
        let tFreq = {}

        for(let i = 0; i < s.length; i++){
            sFreq[s[i]] = (sFreq[s[i]] || 0) + 1 
            tFreq[t[i]] = (tFreq[t[i]] || 0) + 1 
        }

        for(let key in sFreq){
            if(sFreq[key] !== tFreq[key]) return false
        }

        return true
    }
}
