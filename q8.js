/8. Given an array of numbers, write a function that returns the index of the first number that is greater than 10. If no such number exists, return -1.  


let arr = [9 , 33 , 34 , 23 , 45 , 56];

let x = arr.length

function firstindex(num,x){

    for (let i = 0; i < x ; i++){

        if (num[i] > 10){

            return i

        }

    }

    return -1

}
console.log(firstindex(arr,x))

