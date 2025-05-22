function displayNumbersDivisible() {
    let sum = 0;
    for(let i = 0; i <= 500; i++) {
        if(i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }
console.log("The sum of all numbers divisible by 23 is: " + sum);
}
displayNumbersDivisible();