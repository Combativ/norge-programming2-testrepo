
// Task: Example (demonstrating how to complete a task)
// Create a function that returns the circumference of a circle given the radius
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

// Task 1
// Create a list (array) "people" and populate it with the names from https://github.com/MM-203/misc/blob/main/text/names.txt

let people = [
  "Benedict Thompson",
  "Lennon Kline",
  "Trinity Cox",
  "Angela Willis",
  "Oliwia Walter",
  "Halle Orozco",
  "Gregory Carrillo",
  "Leyla Dalton",
  "Roosevelt Harrington",
  "Antonia Aguilar"
];


// Task 2
// Output all the names in the list people

for (let person of people) {
  console.log(person);
}

console.log("\n\n");



// Task 3
// Output only the longest name in the list people

let longestName = "";
for (let person of people) {
  if (person.length > longestName.length) {
    longestName = person;
  }
}
console.log(longestName);

console.log("\n\n");


// Task 4
// Output all the names in alphabetical order.

let people_sorted = people.sort();
for (let person of people_sorted) {
  console.log(person);
}

console.log("\n\n");


// Task 5
// Output all the names in order from longest to shortest last name.
// NB! last name (not full name)

let people_sorted_lastname = people.sort((a, b) => {
  let lastNameALength = a.split(" ")[1].length;
  let lastNameBLength = b.split(" ")[1].length;
  return lastNameBLength - lastNameALength;
});

for (let person of people_sorted_lastname) {
  console.log(person);
}

console.log("\n\n");


// Task 6
// Fix the following code

function f(ps) {
  var o = [];
  for (var i = 0; i < ps.length; i++) 
    o.push({ firstName: ps[i].split(" ")[0], lastName: ps[i].split(" ")[1] });
  return o;
}

people = f(people);
console.log(people);
