const numbers = [5, 6, 3, 2, 8, 1, 4, 9, 7];

function sortArray(array, order) {

    if (order === 'asc') {
        let sorted = numbers;
        sorted.sort();
        return sorted;
    } else if (order === 'desc') { 
        let sorted = numbers;
        sorted.sort();
        sorted.reverse();
        return sorted;
    }
    
}

console.log("Ascending numbers: " + sortArray(numbers, 'asc'));
console.log("Descending numbers: " + sortArray(numbers, 'desc'));