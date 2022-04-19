function calculateAverageAge(persons) {
  let calc = 0

  for (let i = 0; i < persons.length; i++) {
    calc = calc + (persons[i].age);
  }
  calc = calc / persons.length;

  return (calc)

}


const persons = [{
    name: 'Paul',
    age: 16
  },
  {
    name: 'George',
    age: 17
  },
  {
    name: 'Lucas',
    age: 21
  },
  {
    name: 'Marco',
    age: 32
  },
  {
    name: 'Peter',
    age: 18
  },
  {
    name: 'Carl',
    age: 13
  },
  {
    name: 'Simon',
    age: 24
  },
  {
    name: 'Mark',
    age: 15
  },
  {
    name: 'Sandra',
    age: 34
  },
  {
    name: 'Alice',
    age: 28
  }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);