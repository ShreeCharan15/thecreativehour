let a = [1, 2, 3, 4, 5]

a.push(6);

console.log("Array = ",a);

//loop through each element of the array
console.log("\nLooping through array");
console.log("index",":", "item");
a.forEach(function(item, index) {
    console.log(index,":", item);
})

//length - get length of array/list
let length = a.length;

//map - apply a function to each item of the list and return a list of results
let squares = a.map(function(item){
    return item**2;
})
//Equivalent to:
// let squares=[]
// a.forEach(function(item, index) {
//     squares.push(item**2);
// })

//filter - apply a function which returns true or false to each item of the list and return a list with values that have true
let odd = a.filter(function(item){
    return item % 2 !== 0;
})
// Equivalent to:
// let squares=[]
// a.forEach(function(item, index) {
//     if(item % 2 !== 0){
//         squares.push(item*2);
//     }
// })

console.log("\nlength = ",length,);
console.log("\nsquares = ",squares);
console.log("\nodd = ",odd);