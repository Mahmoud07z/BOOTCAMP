const planets = [
  { name: "mercury", moons: 0 },
  { name: "venus", moons: 0 },
  { name: "earth", moons: 1 },
  { name: "mars", moons: 2 },
  { name: "jupiter", moons: 79 },
  { name: "saturn", moons: 83 },
  { name: "uranus", moons: 27 },
  { name: "neptune", moons: 14 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet", planet.name);
  planetDiv.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.left = `${110 + i * 35}px`;
    moon.style.top = `${Math.random() * 60}px`;
    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
