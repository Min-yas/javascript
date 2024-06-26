//4. Set Operations:
// Create a set to store a collection of unique courses.
// Write functions to add a course, remove a course, and check if a course exists in the set.
// Demonstrate the usage of these functions.

const courses = new Set()

function add_course(name){
    courses.add(name)
}

function remove_course(name){
    courses.delete(name)
}

function check_course(name){
    if(courses.has(name)){
        return `${name} course exists in the set`
    }

    return -1
}

add_course("MCA")
add_course("MBA")
add_course("BCA")
add_course("BBA")

console.log(courses)

remove_course("BBA")

let result = check_course("MCA")

console.log(result)