const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const arraySizes = {
    tinyArray: 10,
    smallArray: 100,
    mediumArray: 1000,
    largeArray: 10000,
    extraLargeArray: 100000,
}

console.log('Timings Table:');
console.log('---------------------------');
console.log('| Array Size       | append        | insert        |');
console.log('---------------------------');



// How long does it take to double every number in a given 
// array? 
/*
extraLargeArray:
insert 993.745 ms
append 2.7886 ms

largeArray:
insert 7.9971 ms
append 463 μs

mediumArray:
insert 183.4 μs
append 153.1 μs

smallArray:
insert 44 μs
append 89.8 μs

tinyArray:
insert 33.3 μs
append 78.4 μs
*/
/*
This function below works with the arraSizes above to make an table in
the console.
I didn't know if I was supposed to just make a table inside of comment
tags so I looked up a way to make this in the console and it looks really nice
so I went with it : )
*/
for (const arrayName in arraySizes) {
    const arraySize = arraySizes[arrayName]
    const array = getSizedArray(arraySize)

    perf.start()
doublerAppend(array)
const appendResults = perf.stop()

perf.start()
doublerInsert(array)
let insertResults = perf.stop()

console.log(`| ${arrayName.padEnd(16)}| ${appendResults.preciseWords.padEnd(14)}| ${insertResults.preciseWords.padEnd(14)}|`)
}
console.log('---------------------------');

/*
Based on the timing results we can see a pattern in how each function scales.
The doublerAppend is consistently faster execution than the douberInsert
for all arrays. As the array increases both functions have a higher runtime.
The doublerAppend is a linear scaling pattern so it increases gradually as arrays grow.
The doublerInsert is more of an exponential scaling, this is shown well in the largeArray and extraLargeArray's insert.

In my opinion the doublerAppend scales better. As seen in the table from the console it has
much better runtime's than the insert. This is also because it is a linear time complexity vs the
doublerInsert using a time complexity of O(n^2), this is due to the unshift() I believe.
*/