var myArray = [2, 6, 2, 3, 6, 7, 8, 0, 2];

// ukol 1: vynasov vsechny prvky array dvema
// ukol 2: vyfiltruj vsechny prvky array ktere jsou vetsi nez 3

var multiplyByTwo = function (number) {
    return number * 2
};

var higherThanThree = function (number) {
    return number > 3
};

// console.log(myArray.map(multiplyByTwo));
// console.log(myArray.filter(higherThanThree));


// console.log(myArray.map(function (number) {
//     return number * 2
// }));

// console.log(myArray.map(number => number * 2));

console.log(myArray);

var newArray = myArray.map(function (number) {
    return {
        original: number,
        new: number * 2
    }

    // return number * 2
});

// console.log(JSON.stringify(newArray, null, 2));
console.log(newArray);

// .map()
// .filter();

