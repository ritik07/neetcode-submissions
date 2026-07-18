class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums)
        let result = 0;


        for(let i = 0; i < nums.length; i++){
            let streak = 0;
            let current = nums[i]
            
            while(numsSet.has(current)){
                streak++
                current++
            }

            result = Math.max(streak, result)
        }

        return result
        
    }
}
