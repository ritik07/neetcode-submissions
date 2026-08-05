class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let minSoFar = nums[0];
        for(let i = 1; i < nums.length; i++){
            if(minSoFar > nums[i]){
                minSoFar = nums[i]
            }
        }

        return minSoFar
    }
}
