

// 268. Missing Number


// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array


let missingNumber = function(nums) {
    let sum = 0;
    let n = nums.length
    let naturalNum = (n*(n+1))/2;

    for(let i=0;i<n;i++){
        sum+=nums[i]
    }
    let reqNum = naturalNum - sum;
    return reqNum
};