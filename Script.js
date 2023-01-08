// Array.
let name =["roshan", "elon", "steve", "jockey","bugati"]
console.log(name);
console.log(name.length)// length starts from1 and index from 0
console.log(name[0]);// anything inside [] prints index
console.log(name[name.length-1]) // prints last index.

// Changing value
name[2]="apple"; // change value at a index.
console.log(name);

// other way of creating array.
names= new Array(1,2,"3")
console.log(names);

// Array Method.

// 1. push() - adds an element to the end of an array.
// Modify.
let arr1=[ "push",1,2,"three"]
arr1.push("four",5)
console.log(arr1);

// pop() - removes an element from the end of an array.
// Modify
let arr2=["pop",2,3,4,5]
arr2.pop()
console.log(arr2);

// shift() - removes an element from the beginning of an array.
// Modify
let arr3=["one", "shift","three","four"]
arr3.shift()
console.log(arr3);

// unshift() - adds an element to the beginning of an array.
// Modify
let arr4=[1,2,3,4,5]
arr4.unshift("unshift",2)
console.log(arr4);

// slice() - returns a new array that includes a specified range of elements from an original array
let arr5=[1,2,3,4,5]
console.log(arr5.slice(2, 5)) //length
// console.log(arr5);  // Not modify

// splice() - modifies an array by removing or replacing existing elements, or adding new ones.
let arr6=[1,2,3,4,5,6]
console.log(arr5.splice(0, 3)) //index

// sort() - sorts the elements of an array in place, and returns the sorted array
let arr7=[1,3,5,8,2,4,6]
arr7.sort()
console.log(arr7);

// reverse() - reverses the order of the elements of an array in place, and returns the 
let arr8=["reverse",1,2,3,4,5]
arr8.reverse()
console.log(arr8);

// concat() - returns a new array that combines the elements of two or more arrays
let arr9=[1,2,3]
let arr=[4,5,6]
console.log(arr9.concat(arr));

// indexOf() - returns the index of the first occurrence of a specified element in an array, or -1 if the element is not present
let arr10=[1,2,3,4,5,6]
console.log(arr10.indexOf(3));

// Copy within
let arr11=[1,2,3,4,5,6,7]
arr11.copyWithin(2,5,6)
console.log(arr11);

// includes
let arr12=[1,2,3,4,5]
console.log(arr12.includes(1 ))

// Split.
let str="roshan"
console.log(str.split(""));

