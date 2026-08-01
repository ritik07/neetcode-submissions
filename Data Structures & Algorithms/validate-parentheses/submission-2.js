class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let closeToOpen = {
            ")":"(",
            "]":"[",
            "}":"{"
        }

        for(let item of s){
            if(closeToOpen[item]){
                if(stack.length > 0 && stack[stack.length - 1] ===  closeToOpen[item]){
                    stack.pop()
                }else{
                    return false
                }
            }else{
                stack.push(item)
            }
        }

        return stack.length === 0
    }
}
