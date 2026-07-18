class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let resObj = {}

        for(let s of strs){
            let sortedS = s.split("").sort().join("")

            if(!resObj[sortedS]){
                resObj[sortedS] = []
            }
            resObj[sortedS].push(s)
        }
        return Object.values(resObj)
    }
}
