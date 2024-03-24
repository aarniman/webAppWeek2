const celsius = Number(prompt("Enter a celsius value: "));

let fahrenheit = celsius * (9/5) + 32;
let kelvin = celsius + 273.15;

document.querySelector('#fahreheit').innerHTML = 'Temperature in Fahrenheit: ' + fahrenheit;
document.querySelector('#kelvin').innerHTML = 'Temperature in Kelvin: ' + kelvin;
