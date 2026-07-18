class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqCount = {}

    for (let i = 0; i < nums.length; i++) {
        freqCount[nums[i]] = (freqCount[nums[i]] || 0) + 1
    }

    const heap = new MinPriorityQueue((x)=>x[1])

    for(let [nums, freq] of Object.entries(freqCount)){
        heap.enqueue([nums, freq])
        if(heap.size() > k) heap.dequeue()
    }

    const result = []
    for(let i = 0; i < k; i++){
        let data = heap.dequeue()
        result.push(+data[0])
    }

    return result
}
}
