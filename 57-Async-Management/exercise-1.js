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
  return new Promise((resolve,reject)=>{
    if(persons.find(user => user.id === id)){
      resolve(persons.find(user => user.id === id))
    }
  })
}

fetchPersonById(2)
.then(risultato=>console.log(risultato))

