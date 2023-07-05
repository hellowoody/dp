/*
70. 爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
*/


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const map = new Map()

    function dp(step){
        if (step === 1) {
            return 1
        }
        if (step === 2) {
            return 2
        }
        if(map.has(step)){
            return map.get(step)
        }else{
            const res = dp(step-1) + dp(step-2)
            map.set(step,res)
            return res
        }
    }
    return dp(n)

};

