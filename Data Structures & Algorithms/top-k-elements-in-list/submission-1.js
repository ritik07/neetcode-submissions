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

        const freqToAr = Object.entries(freqCount)
        const freqNumAr = freqToAr.map(([num, freq])=> [freq, parseInt(num)])

        const sortByFreq = freqNumAr.sort((a, b) => b[0] - a[0])

        const sliceFreq = sortByFreq.slice(0, k)
        const result = sliceFreq.map((item)=>item[1])
        return result
    }
}
