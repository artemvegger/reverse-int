module.exports = function reverse(n) {
    let reversedNumber = parseInt(Math.abs(n).toString().split('').reverse().join(''), 10);
    return reversedNumber;
}