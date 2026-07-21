class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let l = 0;
        let r = heights.length - 1;

        while(l < r){
            const width = r - l
            const area = Math.min(heights[r], heights[l]) * width;
            res = Math.max(res, area)

            if(heights[l] <= heights[r]){
                l++
            }else{
                r--
            }
        } 
        return res
    }
}
