//Find the difference in age between the oldest and youngest family members, 
//and return their respective ages and the age difference.
 
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
var max = Math.max(...input.map(input => input.age));
var maxValues = input.filter(input  => input.age == max);

var min = Math.min(...input.map(input  => input.age));
var minValues = input.filter(input  => input.age == min);

console.log(maxValues);
console.log(minValues);