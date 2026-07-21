class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0

        for(let i = 0; i < heights.length; i++){
            for(let j = i + 1; j < heights.length; j++){
                const width = j - i
                res = Math.max(res, (Math.min(heights[i], heights[j]) * width))
            }
        }     
        return res   
    }
}
