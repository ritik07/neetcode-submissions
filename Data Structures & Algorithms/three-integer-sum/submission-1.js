class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length
        let res = []

        nums.sort((a, b) => a - b)

        for(let i = 0; i < n; i ++){
            let a = nums[i]
            
            if(a > 0) break
            if(i > 0 && nums[i] === nums[i - 1]) continue

            let l = i + 1;
            let r = n - 1;

            while(l < r){
                let sum = a + nums[l] + nums[r]

                if(sum > 0){
                    r--
                } else if (sum < 0){
                    l++
                } else{
                    res.push([a, nums[l], nums[r]])
                    l++
                    r--

                    while(l < r && nums[l] === nums[l - 1]){
                        l++
                    }
                }
            }
        }
        return res
    }
}
