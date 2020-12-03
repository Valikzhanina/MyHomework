//Прототипное наследование работает таким образом, что сщздается общий класс,
// в котором прописаны самые обобщенные свойста,универсальны для всех потомков,
//  а каждый последующий класс  или
// обьект от него расширяет эти свойста, при чем есть возможность пользоваться
//  свойствами родителя, что уменьшает задвоение кода.

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
    if (Number.isInteger(newAge)) {
      this._age = newAge;
    } else {
      this._age = newAge = 30;
    }
  }
  set salary(newSalary) {
    if (Number.isInteger(newSalary)) {
      this._salary = newSalary;
    } else {
      this._age = newSalary = 1500;
    }
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
const programmer1 = new Programmer('Anna', 29, 1500, 'ukr');
console.log(programmer1);
console.log(programmer1.salary);
programmer1.name = 'Kate';
programmer1.age = 25;
console.log(programmer1);
const programmer2 = new Programmer('Max', 30, 2300, 'ukr');
console.log(programmer2);
console.log(programmer2.salary);
programmer2.name = 'Ihor';
programmer2.age = 32;
console.log(programmer2);
programmer2.age = 'hg';
console.log(programmer2);
