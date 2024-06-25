let num = [3,5,2]

function sumofall(sum , num){


    return sum + num

}

function pos(product , num){


    return product * num

}

console.log(num.reduce(sumofall))
console.log(num.reduce(pos))