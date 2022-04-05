const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(prompt('Nuovo Studente'));
}

addStudent();
console.log(students);