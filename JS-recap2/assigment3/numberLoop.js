let numbers = [];

let num = "";

while (num !== "done") {
    num = prompt('Enter a number');
    if (num !== "done") {
        numbers.push(num);
    }
}

let even = [];
for (let n of numbers) {
    if (n % 2 === 0) {
        even.push(n);
    }
}

if (even.length === 0) {
    console.log("None");
} else {
    console.log("Even numbers: " + even);
}