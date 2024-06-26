//3. Map Operations:
// Create a map to store student names and their corresponding scores.
// Write functions to add a student, remove a student, and get a student&#39;s score.
// Demonstrate the usage of these functions.

const student = new Map()

function to_add(name,score){
    student.set(name,score)
}

function to_delete(name){
    student.delete(name)
}

function student_score(name){
    return `${name} score is ${student.get(name)}`
}


to_add("Rahul",455)
to_add("Yasmin",495)
to_add("Sahil",452)
to_add("Aman",445)

console.log(student)

to_delete("Aman")

console.log(student)

let score = student_score("Yasmin")

console.log(score)