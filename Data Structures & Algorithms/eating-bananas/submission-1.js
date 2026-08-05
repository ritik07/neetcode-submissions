class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       let minSpeed = 1;
       let maxSpeed = Math.max(...piles)

         function canEat(mid, piles, h){
        let hours = 0;
        for(let pile of piles){
            hours += Math.ceil(pile/mid)

            if(hours > h) return false
        }

        return hours<=h
       }

       while(minSpeed < maxSpeed){
        let mid = minSpeed + Math.floor((maxSpeed - minSpeed) / 2);

        if(canEat(mid, piles, h)){
            maxSpeed = mid
        }else{
            minSpeed  = mid + 1
        }
       }
        return minSpeed

     
    }
}
