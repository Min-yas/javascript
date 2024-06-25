function sortedstring(arr) {

    arr.sort((a, b) => a.length - b.length);
    
    console.log(...arr);

    }

let arr = ["am" , "yasmin" , "i"]

sortedstring(arr);