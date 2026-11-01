function climbStairs(n) {
    let first = 1;
    let second = 2;

    if (n === 1) {
        return first;
    }

    for (let i = 3; i <= n; i++) {
        let current = first + second;

        first = second;
        second = current;
    }

    return second;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8