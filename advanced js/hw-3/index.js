class Employee {
  constructor(name, age, salary) {
    (this._name = name.trim().toLowerCase()),
      (this._age = age),
      (this._salary = salary);
  }
  set name(newName) {
    this._name = newName.trim().toLowerCase();
  }
  set age(newAge) {
    this._age = newAge;
  }
  set salary(newSalary) {
    this._salary = newSalary;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get salary() {
    return this._salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang.trim().toLowerCase();
  }
  get salary() {
    return this._salary * 3;
  }
}
const pro = new Programmer('Anna', 29, 1500, 'ukr');
console.log(pro);
console.log(pro.salary);
console.log(pro.name);
