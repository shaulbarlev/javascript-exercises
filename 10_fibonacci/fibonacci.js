// const fibonacci = function(n) {
//     if (typeof n !== 'number') {
//         n = Number(n);
//     }
//     if (n < 0) return "OOPS";
//     let sequence = [0,1];
//     // console.log(sequence[sequence.length-1])
//     for (let i = 0; i <= n; i++) {
//         let value = sequence[sequence.length-1] + sequence[sequence.length-2];
//         sequence.push(value);
//     }
//     return Number(sequence[sequence.length-3]);
// };

const fibonacci = n => {
    if (typeof n !== 'number') {
        n = Number(n);
    }
    if (n < 0) return "OOPS";
    let fib = [0,1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
