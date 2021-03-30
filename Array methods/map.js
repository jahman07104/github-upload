const people = [
  "jason derulo", 
  "johnny appleseed", 
  "clint dart",
];

let capitalizedPeople = people.map((person) => {
  let [ firstName, lastName ] = person.split(' ');
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);

  return `${firstName} ${lastName}`;
})

console.log(capitalizedPeople);