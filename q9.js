/9. Write a function that removes the third element from an array and returns a new array with the removed element. Do not modify the original array.  

let arr = [9 , 65 , 34 , 23 , 32 , 56];

function remove_element(num){

    num.splice(3,1);

    console.log(num)

}

remove_element(arr)

