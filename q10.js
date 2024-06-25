/10. Write a function that concatenates two arrays without using the concat method.  


const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

arr2.forEach((element) => {
    arr1.push(element);
});

console.log(arr1); 
