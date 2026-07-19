class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        let l = 0;
        let r = n - 1;

        while(l < r){
            const currentSum = numbers[l] + numbers[r]

            if(currentSum > target){
                r--
            }else if(currentSum < target){
                l++
            }

            if(currentSum === target) return [l+1, r+1]
        }

        return []
    }
}
