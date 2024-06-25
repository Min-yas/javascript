//Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.

function Merge()
{
    let arr1=[1,2,3,4];
    let arr2=[9,8,7,6];
    let merged = [77,...arr1, ...arr2]

    console.log("Merged array" +merged);   
}
Merge();