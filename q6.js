//6. Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product, the product of all the numbers using reduce method.

let num = [3,5,2]

function sumofall(sum , num){


    return sum + num

}

function pos(product , num){


    return product * num

}

console.log(num.reduce(sumofall))
console.log(num.reduce(pos))
