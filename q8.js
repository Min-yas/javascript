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

