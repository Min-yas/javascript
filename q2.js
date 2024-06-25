//Write a function that returns a new array with each number squared using the map method...

function numsquare()
{
    const numbers = [4,16,9,25,49];
    const newArr = numbers.map(Math.sqrt)
    console.log("Normal array" +numbers);
    console.log("Squared array" +newArr);
}
numsquare();