class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nums2 = new Set(nums)
        return nums2.size !== nums.length
    }
}
