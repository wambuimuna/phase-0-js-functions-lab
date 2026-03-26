function calculateTax(amount) {
    return amount * 0.10;
}
console.log(calculateTax(100));

function convertToUpperCase(text) {
    return (text).toUpperCase();
} 
console.log(convertToUpperCase("jessica muna"));

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {        
        return num2;
    }       
}
console.log(findMaximum(10, 20));

function isPalindrome(word) { 
    return word === word.split('').reverse().join('');
}  
console.log(isPalindrome("racecar"));  
console.log(isPalindrome("hello"));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
}   
console.log(calculateDiscountedPrice(100, 20));



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };