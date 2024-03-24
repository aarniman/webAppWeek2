const x1 = Number(prompt("Enter the x1 coordinate:"));
const x2 = Number(prompt("Enter the x2 coordinate:"));
const y1 = Number(prompt("Enter the y1 coordinate:"));
const y2 = Number(prompt("Enter the y2 coordinate:"));

let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

document.querySelector('#distance').innerHTML = 'Distance between the two points: ' + distance;

