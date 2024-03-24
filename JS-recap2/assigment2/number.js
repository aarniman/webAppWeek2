let numbers = [];

const num1 = prompt('Enter the first number');
numbers.push(num1);

const num2 = prompt('Enter the second number');
numbers.push(num2);

const num3 = prompt('Enter the third number');
numbers.push(num3);

const num4 = prompt('Enter the fourth number');
numbers.push(num4);

const num5 = prompt('Enter the final number');
numbers.push(num5);

console.log("Numbers: "+numbers);

const check = prompt('Enter a number to check if it is in the list');

if (numbers.includes(check)) {
    console.log(check + " is in the list");
} else {
    console.log(check + " is not in the list");
}

numbers.pop();

console.log("Numbers: "+numbers);

numbers.sort();

console.log("Numbers: "+numbers);