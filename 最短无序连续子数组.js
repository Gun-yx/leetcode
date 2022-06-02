//给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。请你找出符合题意的最短子数组，并输出它的长度。
var findUnsortedSubarray = function(nums) {
    const copied = nums.slice(0).sort((a, b) => a - b)
    let i = 0
    let j = nums.length - 1
    while (copied[i] === nums[i] && i < nums.length) {
        i++
    }
    while (copied[j] === nums[j] && j >= 0) {
        j--
    }
    if (i >= j) {
        return 0
    }
    return j - i + 1
};