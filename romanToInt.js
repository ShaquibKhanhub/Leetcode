// 13. Roman to Integer



// Que

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



let romanToInt = function(s) {

  const rom = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  };
  let  res =0
  for(let i=0;i<s.length;i++){
      let curr = rom[s[i]],next = rom[s[i+1]];
      if(curr < next){
      res+= next-curr
      i++
      }
      else res+=curr
  }
  return res
};




// Code Explaination

// To solve this problem, we need to create a hash table, the characters in which will correspond to a certain number. Passing along the line, we will check the current and the next character at once, if the current one is greater than the next one, then everything is fine, we add it to the result (it is initially equal to 0), otherwise, we subtract the current value from the next value (for example, the current 10, and the next 100 , we do 100 - 10, and we get 90), we also add to the result and additionally increase the index by 1. As a result, at the end of the loop, we will get the result we need.

// I hope the picture below will help you understand in more detail!)