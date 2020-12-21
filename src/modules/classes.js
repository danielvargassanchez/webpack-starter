//clase persona
export class Persona {
  constructor(first, last, age) {
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
  }

  bio() {
    var string =
      this.name.first +
      " " +
      this.name.last +
      " is " +
      this.age +
      " years old. ";
    alert(string);
  }

  farwell() {
    alert(`GoodBye for ${this.name.first}`);
  }
}
