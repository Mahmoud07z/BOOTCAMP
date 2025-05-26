const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const radius = document.getElementById('radius').value;
console.log(radius);

if (isNaN(radius) || radius <= 0) {
    alert('Please enter a valid positive number for radius.');
    return;
}

const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

const vlElement = document.getElementById('volume')
vlElement.value = volume.toFixed(2);
// console.log("value: " , vlElement.value);
});