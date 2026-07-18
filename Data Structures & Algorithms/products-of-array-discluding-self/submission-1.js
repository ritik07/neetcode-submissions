class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zeroCount = 0;

        let result = Array(nums.length)

        for(let num of nums){
            if(num === 0){
                zeroCount++
            }else{
                product *= num
            }
        }

        if(zeroCount > 1){
            return Array(nums.length).fill(0)
        }

        for(let i = 0; i < nums.length; i++){
            if(zeroCount > 0){
                result[i] = nums[i] === 0 ? product : 0
            }else{
                result[i] = product/nums[i]
            }
        }

        return result
    }
}
