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

        const heap = new MinPriorityQueue((x)=>x[1])
        for(const [num, freq] of Object.entries(freqCount)){
            heap.enqueue([num, freq])
            if(heap.size() > k) heap.dequeue()
        }

        let res = []

        for(let i = 0; i < k; i++){
            const [num, freq] = heap.dequeue()
            res.push(num)
        }

        return res
    }
}
