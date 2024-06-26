//2. Class Inheritance:
// Create a Student class that inherits from the Person class.
// Add an additional property studentID and a method study that returns a string stating the student is studying.
// Instantiate an object of the Student class and demonstrate the inherited and new properties/methods.



class Person{
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
}

class Student extends Person{
    constructor(name,studentID){

        super(name)
        this.studentID = studentID
    }

    study(){
        return `student ${this.name} is studing`
    }
}

let obj = new Student("Yasmin",101)

console.log(obj.study())
