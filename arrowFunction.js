// const doubleIt = function(num) {
//     return num *2;
// }

// const result = doubleIt(5);

// console.log(result)

const doubleIt = num => num *2;
const add = (x, y) => x + y;
const giveFive = () => 5;

const bishal = (x,y) => {
    const sum =  x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add(50, 70);
const result2 = giveFive();
const doMath = bishal(7, 5)
console.log(doMath);