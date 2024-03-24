const multiplication = Number(prompt("Enter a number to see its multiplication table:"));

let table = '<table>';

for (let i = 1; i <= multiplication; i++) {
    table += '<tr>';
    for (let j = 1; j <= multiplication; j++) {
        table += '<td>' + i * j + '</td>';
    }
    table += '</tr>';
}

table += '</table>';

document.querySelector('#table').innerHTML = table;