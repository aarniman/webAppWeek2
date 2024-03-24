const score = Number(prompt("Enter your score 0-100:"));

if (score >= 88) {
  document.querySelector('#assessment').innerHTML = '5';
} else if (score >= 76) {
  document.querySelector('#assessment').innerHTML = '4';
} else if (score >= 64) {
  document.querySelector('#assessment').innerHTML = '3';
} else if (score >= 52) {
  document.querySelector('#assessment').innerHTML = '2';
} else if (score >= 40) {
  document.querySelector('#assessment').innerHTML = '1';
} else {
  document.querySelector('#assessment').innerHTML = '0';
}