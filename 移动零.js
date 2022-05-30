//给定一个数组nums，编写一个函数将所有0移动到数组的末尾，同时保持非零元素的相对顺序

//注意：必须在不复制数组的情况下原地对数组进行操作

var moveZeroes = function(nums) {
    let left = nums.length - 1;
    let right = 0;
    for(let left = 0 ; left < nums.length; left++){
        if(nums[left] == 0){
            right++
            nums[right] == 0;
            nums[left] = nums[left + 1];
        }
    }
};