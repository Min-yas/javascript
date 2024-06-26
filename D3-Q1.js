//1.Class Creation and Object Instantiation:
//i> Create a Person class with properties name, age, and gender.
//ii> Add a method describe that returns a string with all the person&#39;s details.
//iii> Instantiate three objects of the Person class and log their details using the describe method.

class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    personDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`gender: ${this.gender}`);
    }
  }
  
  const person1 = new Person('Rahul', 24, 'm');
  const person2 = new Person('Gayetri', 22, 'f');
  const person3 = new Person('Aryan',22, 'm');
  
 
  console.log('Person-1 Details:');
  person1.personDetails();
  
  
  console.log('\nPerson-2 Details:');
  person2.personDetails();

  console.log('\nPerson-3 Details:');
  person3.personDetails();
  