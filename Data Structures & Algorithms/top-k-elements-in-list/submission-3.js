class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqCount = {}

        for(let i = 0; i < nums.length; i++){
            freqCount[nums[i]] = (freqCount[nums[i]] || 0) + 1
        } 

        const arrOfFreqCount = Object.entries(freqCount);
        const freqFirst = arrOfFreqCount.map(([num, freq])=>[freq, parseInt(num)])
        const sortByFreq = freqFirst.sort((a, b)=> b[0] - a[0])

        return sortByFreq.slice(0, k).map((item)=>item[1])
    }
}
