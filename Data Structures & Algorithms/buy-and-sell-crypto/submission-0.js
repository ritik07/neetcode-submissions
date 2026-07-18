class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let r = 1, l = 0;
        let maxP = 0;

        while(r < prices.length){
            if(prices[l] < prices[r]){
                let profit = prices[r] - prices[l]
                maxP = Math.max(profit, maxP)
            }else{
                l = r
            }
            r++
        }
        return maxP
    }
}
