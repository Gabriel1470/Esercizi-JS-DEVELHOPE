class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName,
      this.lastName = lastName,
      this.age = age,
      this.fullName = () => {
        return `${this.firstName} ${this.lastName}`
      }
  }
  get firstName() {
    return `${this.firstName}`;
  }
  set firstName(value) {
    this.firstName = value;
  }

  get lastName() {
    return `${this.lastName}`
  }

  set lastName(value) {
    this.lastName = value
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }


}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);