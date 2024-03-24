const side1 = Number(prompt("Enter first side of the triangle:"));
const side2 = Number(prompt("Enter second side of the triangle:"));
const side3 = Number(prompt("Enter third side of the triangle:"));

if (side1 === side2 && side2 === side3) {
  document.querySelector('#triangle').innerHTML = 'Equilateral triangle';
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  document.querySelector('#triangle').innerHTML = 'Isosceles triangle';
} else {
  document.querySelector('#triangle').innerHTML = 'Scalene triangle';
}