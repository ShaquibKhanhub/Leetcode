// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

let isAnagram = function (s, t) {
  let len1 = s.length;
  let len2 = t.length;
  if (len1 !== len2) {
    return false;
  }

  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");

  if (str1 === str2) {
    return true;
  } else return false;
};
