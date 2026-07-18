class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let tSort = t.split("").sort().join()
        let sSort = s.split("").sort().join()

        if(tSort !== sSort) return false
        return true
    }
}
