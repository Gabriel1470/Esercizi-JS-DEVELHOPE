const persons = [{
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(user => user.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      } else {

        return reject(`Person with id: ${id} doesn't exist`);
      }
    }, 500);
  });
}

fetchPersonById(4)
  .then((resolve) => console.log(JSON.parse(resolve)))
  .catch(reject => console.log(reject))