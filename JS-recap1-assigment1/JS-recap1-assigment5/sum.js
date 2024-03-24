const num = Number(prompt("Enter a number:"));

let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}

document.querySelector('#sum').innerHTML = 'Sum of numbers from 1 to ' + num + ' is ' + sum;