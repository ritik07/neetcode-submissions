class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity
        let max = 0;


        for(let i = 0; i < prices.length; i++){
            let profitCal = prices[i] - min 
            if(min > prices[i]){
                min = Math.min(prices[i], min)
            }else if(profitCal > max){
                max = Math.max(max, profitCal)
            }
        }
        
        return max
    }
}
