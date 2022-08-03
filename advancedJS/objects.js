let person={
    name:"John",
    age:30,
    hobbies:["Sports","Cooking"],
    
}
console.log(person);

//Accessing object values
console.log("Person's name:",person.name);
console.log("Person's age:",person['age']);
console.log("Person's hobbies:",person.hobbies[0], person.hobbies[1]);

//get a list of all the keys
let keys = Object.keys(person);

//get a list of all the values
let values = Object.values(person);

console.log("keys:",keys);
console.log("values:",values);

// Adding new entries and nested objects
person.friends = [
    {name:"Bob",age:30},
    {name:"Alice",age:25}
]
console.log("Friend 0's name:",person.friends[0]['name']);
console.log("Friend 1's age:",person.friends[1].age);

console.log("Friend 0's keys:",Object.keys(person.friends[0]));