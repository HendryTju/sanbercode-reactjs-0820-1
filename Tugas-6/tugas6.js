// Soal 1
// Create function to calc area of circle
// Asumsi: Use pi = 3.14
const pi = 3.14;
let radius = 10;
const areaCircle = (pi, radius) => {
  const result = pi * radius * radius;
  return result;
};
console.log(areaCircle(pi, radius));

// Soal 2
// Create function to add string literal to create a sentence

let kalimat = "";
// Use rest operator to obtain all string
const addwords = (...words) => {
  //Spread it to word 1 - 5
  const [word1, word2, word3, word4, word5] = words;
  // return the concat version
  return (kalimat = kalimat.concat(
    `${word1} ${word2} ${word3} ${word4} ${word5}`
  ));
};

// get strings
addwords("Saya", "adalah", "seorang", "frontend", "developer");
console.log(kalimat);

// Soal 3
// Create arrow function from es5 function

const newFunction = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName,
  fullName: () => {
    console.log(firstName + " " + lastName);
    return;
  },
});

newFunction("wiliam", "imoh").fullName();

// Soal 4
// Destructuring method
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);

// Soal 5
// Use Array Spread
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);
