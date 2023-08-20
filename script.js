let newArray = [1,9,3,4,5];
let newArray2 = [,7,8,9,10];

const iterator1 = newArray2.entries();
console.log(newArray2.concat(newArray));


// combines elements of two arrays can also add new elements in the array 
//returns a new array instance


const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));




console.log(iterator1.next().value);



const limit = (currentvalue) => currentvalue < 1;

console.log(newArray.every(limit));


const isgreater = (value) => value > 4;

console.log(newArray.findIndex(isgreater))