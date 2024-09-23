//ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!
//why an array can be altered is because the value is stored in the address instead of the actual variable
// console.log("START");

// //can put numbers and words together!!
// console.log("STACK");

// const numbers = [1,2,3,4,5];
// console.log(numbers);

// //stack push and pop!!
// numbers.push(9);
// numbers.push(1);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.push(69);
// console.log(numbers);

// // hold alt+shift and down to instantly type!!!!

// //shift = enqeue
// //unshift is to add to the front!!
// //shift deletes front!!
// console.log("SHIFT/ENQEUE");

// numbers.unshift(3);
// numbers.unshift(4);
// numbers.unshift(7);
// console.log(numbers);

// numbers.shift();
// numbers.shift();
// numbers.shift();
// console.log(numbers);

// //SLICE
// //creates new copy/does not alter the original array!!
// //slices from the inputted number to the back
// //a negative index gets an element from the back
// // inputs are like a substring
// //(1), (1, 2), (1, -2)
// console.log("SLICE");

// const numbers2 = numbers.slice(3);
// console.log(numbers2);

// const numbers3 = numbers.slice(3, 6);
// console.log(numbers3);

// const numbers4 = numbers.slice(3, 10)
// console.log(numbers4);


// //SORT
// //to sort to ascending order!!
// // sorting as string/treated as string
// numbers.sort();
// console.log(numbers);
// //to reverse an array
// numbers.sort().reverse();

// //SPLICE
// // 0 in the middle means to insert!!
// // 1 in the middle means to replace!!
// //(1, 2) = removes the specified index!!
// //(2, 0, 'c'/anynumber)
// numbers.splice(2, 1);
// console.log(numbers);
//ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!

//OBJECT
const student = {
    //key   value
    "name":"Jazric",
    "course":"BSIT",
    "address":"San Felix",
    "grade":"69",

    //array
    "subjects":["CCIT102", "FAITH101", "PE"]
}

console.log(student);

//uses the key to retrieve the value!!!
console.log(student.name);
//or
console.log(student["name"]);

//getting the specific element of an array of a key-value pair!!
console.log(student.subjects[2]);
