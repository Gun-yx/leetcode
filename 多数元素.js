//给定一个大小为n的数组nums，返回其中的多数元素。
//多数元素：在数组中出现次数大于[n/2]的元素。
//你可以假定数组是非空的，并且给定的数组是存在多数元素。

//解法一：排序
var majorityElement = function(nums){
    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

//时间复杂度：O（nlogn)
//空间复杂度：O (logn)