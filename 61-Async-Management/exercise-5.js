const persons = [
  {
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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (persons.find(user => user.id === id)) {
       return resolve(persons.find(user => user.id === id));
      } else {

        return reject(`Person with id: ${id} doesn't exist`);
      }
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobs.find(item => item.id === id)) {
        resolve(jobs.find(item => item.id === id))
      }else {
        return reject(`Il lavoro con id:${id} doesen't exist`)
      }
    }, 500)
  })
}


Promise.race([fetchPersonById(4), fetchJobById(5)])
.then(console.log).catch((reject)=>console.log(reject))