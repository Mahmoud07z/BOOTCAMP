const prompt = require("prompt-sync")();

function hotelCost() {
  let nights;
  while (true) {
    nights = prompt("How many nights would you like to stay in the hotel? ");
    if (nights !== "" && !isNaN(nights) && Number(nights) > 0) {
      break;
    }
    console.log("Please enter a valid number of nights.");
  }
  return Number(nights) * 140;
}

function planeRideCost() {
  let destination;
  while (true) {
    destination = prompt("What is your travel destination? ");
    if (destination && isNaN(destination)) {
      destination = destination.toLowerCase();
      break;
    }
    console.log("Please enter a valid destination.");
  }
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost() {
  let days;
  while (true) {
    days = prompt("How many days would you like to rent the car? ");
    if (days !== "" && !isNaN(days) && Number(days) > 0) {
      break;
    }
    console.log("Please enter a valid number of days.");
  }
  let cost = Number(days) * 40;
  if (days > 10) {
    cost *= 0.95;
  }
  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();
  const total = hotel + plane + car;
  console.log(`The car cost: $${car.toFixed(2)}, the hotel cost: $${hotel.toFixed(2)}, the plane tickets cost: $${plane.toFixed(2)}.`);
  console.log(`Total vacation cost: $${total.toFixed(2)}`);
}

totalVacationCost();


