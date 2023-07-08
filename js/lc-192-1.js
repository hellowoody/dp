/*
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。


输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

*/

const nums = [2,7,9,3,1]

/**
 * @param {number[]} nums
 * @return {number}
 */
const map = new Map();
var rob = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }

    if(nums.length === 2){
        return nums[0] > nums[1] ? nums[0] : nums[1]
    }

    let case1 , case2

    if(map.has(nums.length-1)){
        case2 = map.get(nums.length-1)
    }else{
        case2 = rob(nums.slice(0,nums.length-1))
        map.set(nums.length-1,case2)
    }

    if(map.has(nums.length-2)){
        case1 = nums[nums.length-1] + map.get(nums.length-2)
    }else{
        let res = rob(nums.slice(0,nums.length-2))
        case1 = nums[nums.length-1] + res
    }
    map.set(nums.length,case1)

    // console.log("case1:",nums,case1)
    // console.log("case2:",map,case2)

    return case1 > case2 ? case1 : case2
};

console.log(rob(nums))