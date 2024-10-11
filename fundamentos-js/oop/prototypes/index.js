function person(name, lastname, age, genre, interest) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.genre = genre;
  this.interest = interest;
}
const person1 = new person("bob", "smith", 12, "man", "run");
console.log(person1);
