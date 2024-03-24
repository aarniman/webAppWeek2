const numbers = [5, 6, 3, 2, 8, 1, 4, 9, 7];

function sortArray(array) {
    let sorted = numbers;
    sorted.sort();
    return sorted;
}

console.log("Sorted numbers: " + sortArray(numbers));