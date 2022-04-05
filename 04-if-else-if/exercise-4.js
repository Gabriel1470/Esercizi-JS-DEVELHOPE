// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

 /* let input = prompt('lavoro')  //for fun */

function calculateSalary(input) {
  if (input == 'ceo') {
    return 'ceo=2200';
  }
  else if(input == 'manager'){
    return 'manager=1800';
  }else if(input == 'cto'){
    return 'cto=1800'
  }

  else if(input == 'developer'){
    return 'developer=1500';
  }
  else{
    return 'base=1000';
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

calculateSalary()
/* console.log(calculateSalary(input)) //for fun */

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);  