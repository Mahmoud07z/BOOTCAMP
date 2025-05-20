const family = {
  father: "Ali",
  mother: "Nora",
  son: "Adam",
  daughter: "Lina"
};

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}
