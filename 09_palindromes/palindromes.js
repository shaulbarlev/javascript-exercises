const palindromes = function (input) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz123456789';
    let arr = input
        .toLowerCase()
        .split('')
        .filter(char => alphanumerical.includes(char));
    
    let reversed = arr.slice().reverse();
    console.log(reversed.join(''));
    console.log(arr.join(''));
    return reversed.join('') === arr.join('');
};

console.log(palindromes("race c.a@r@"));

// Do not edit below this line
module.exports = palindromes;