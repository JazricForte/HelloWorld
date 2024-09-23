console.log("START");

//can put numbers and words together!!
console.log("STACK");

const numbers = [1,2,3,4,5];
console.log(numbers);

//stack push and pop!!
numbers.push(9);
numbers.push(1);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.push(69);
console.log(numbers);

// hold alt+shift and down to instantly type!!!!

//shift = enqeue
//unshift is to add to the front!!
//shift deletes front!!
console.log("SHIFT/ENQEUE");

numbers.unshift(3);
numbers.unshift(4);
numbers.unshift(7);
console.log(numbers);

numbers.shift();
numbers.shift();
numbers.shift();
console.log(numbers);

//SLICE
//creates new copy/does not alter the original array!!
//slices from the inputted number to the back
//a negative index gets an element from the back
// inputs are like a substring
//(1), (1, 2), (1, -2)
console.log("SLICE");

const numbers2 = numbers.slice(3);
console.log(numbers2);

const numbers3 = numbers.slice(3, 6);
console.log(numbers3);

const numbers4 = numbers.slice(3, 10)
console.log(numbers4);

