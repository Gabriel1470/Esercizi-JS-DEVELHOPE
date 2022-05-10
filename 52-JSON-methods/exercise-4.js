const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

for (Element in person){
  if (typeof (person[Element])=== 'string'){
    person[Element] = undefined
  }
}

const json = JSON.stringify(person)
/* const json = JSON.stringify([{id:person.id , age:person.age}]); */

console.log(json,); // Should return: { id: 1, age: 25 }
console.log(person)