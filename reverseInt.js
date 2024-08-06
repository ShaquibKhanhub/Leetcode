
// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21



var reverse = function(x) {
    if (x < 0) return -1 * reverse(-x);
    
    const max = Math.pow(2, 31);
    let r = 0;
    while (x > 0) {
        r = r * 10 + x % 10;
        if (r > max) return 0;
        x = Math.floor(x / 10);
    }
    return r;  
    
};