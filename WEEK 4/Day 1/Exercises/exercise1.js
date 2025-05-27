// Exercise 1: Scope — simple answers

// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// What happens when we run funcOne()?
// Answer: It shows 3 because we start with a = 5, then change a to 3 inside the if.

// What if we use const instead of let?
// Answer: It gives an error because const can’t be changed after you set it.

//--------------------------------------------

// #2
let a1 = 0;

function funcTwo() {
    a1 = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a1}`);
}

// What happens when we run:
// funcThree()  --> shows 0 (because a is 0 at the start)
// funcTwo()    --> changes a to 5
// funcThree()  --> now shows 5

// What if a was const instead of let?
// Answer: It gives an error when funcTwo tries to change a, because const can’t change.

//--------------------------------------------

// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// When we run:
// funcFour()  sets a global variable a to "hello"
// funcFive()  shows "hello"

// Because funcFour makes a global variable that funcFive can see.

//--------------------------------------------

// #4
let a2 = 1;

function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// When we run funcSix(), it shows "test"

// Because inside funcSix, a new 'a' is created that doesn’t affect the outside one.

// What if we use const instead of let inside funcSix?
// It still works the same because we don’t change a after setting it.

//--------------------------------------------

// #5
let a3 = 2;

if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}

alert(`outside of the if block ${a3}`);

// What happens?
// First alert shows 5 (the inside a)
// Second alert shows 2 (the outside a)

// What if we use const instead of let in the if block?
// Same result, because const inside the block works like let but can’t change.

//--------------------------------------------
