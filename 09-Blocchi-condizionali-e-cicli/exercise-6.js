  function getKeys(obj) {
  let prarry= [];
  for(let prop in obj){
    prarry.push(prop);
  }
  return prarry
}  

/* 
function getKeys(obj){
  i = Object.keys
  return(i)
} */

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);