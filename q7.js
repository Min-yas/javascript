/7. Write a function that returns the array sorted by the length of each string, in ascending order.

function sortedstring(arr) {

    arr.sort((a, b) => a.length - b.length);
    
    console.log(...arr);

    }

let arr = ["am" , "yasmin" , "i"]

sortedstring(arr);
