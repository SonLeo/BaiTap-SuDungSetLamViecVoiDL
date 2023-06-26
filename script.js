const animals = new Set();
const addAnimal = name => animals.add(name);
const checkAnimal = name => console.log(animals.has(name));
const removeAnimal = name => animals.delete(name);
const printAnimals = () => animals.forEach(animal => console.log(animal));

addAnimal('cat');
addAnimal('bird');
removeAnimal('cat');
printAnimals();