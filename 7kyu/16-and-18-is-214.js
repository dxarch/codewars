// For this kata you will have to forget how to add two numbers.
// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
// You may assume both integers are positive integers.

// Examples
// +1 6         +2 6             +1 2 2
//  1 8          3 9                8 1
//  ---         ----             -------
//  2 14        5 15             1 10 3


function add(num1, num2) {
    const firstDigitsArr = Array.from(String(num1), Number);
    const secondDigitsArr = Array.from(String(num2), Number);
    
    const sumArray = [];
    
    while (firstDigitsArr.length > secondDigitsArr.length) {
      sumArray.push(firstDigitsArr.shift());
    }
    
    while (secondDigitsArr.length > firstDigitsArr.length) {
      sumArray.push(secondDigitsArr.shift());
    }
    
    for (let i = 0; i < firstDigitsArr.length; ++i) {
      sumArray.push(firstDigitsArr[i] + secondDigitsArr[i]);
    }
    
    return parseInt(sumArray.join(''));
    
  }