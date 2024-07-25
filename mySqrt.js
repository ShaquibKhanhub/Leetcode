// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

let mySqrt = function (x) {
    if (x === 0) return 0;

    let lowIdx = 0,
        highIdx = x;
    let res;

    while (lowIdx <= highIdx) {
        let mid = Math.floor((lowIdx + highIdx) / 2);
        if (mid * mid <= x) {
            res = mid;
            lowIdx = mid + 1;
        } else {
            highIdx = mid - 1;
        }
    }

    return res;
};
