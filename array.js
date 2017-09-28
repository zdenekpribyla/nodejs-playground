var array = [6, 4, 4, 4, 9, 6, 7, 6, 6, 1, 'ahoj', false, false];
var uniqueArray = [];

// for (var i = 0; i < array.length; i++) {
//     // console.log('for loop 1');
//     var item = array[i];
//     //console.log(item);
//
//     if(i === 0) {
//         console.log('i je 0 a proto pushuju prvni objek at je tam aspon jeden');
//         uniqueArray.push(item)
//     }
//
//     console.log('for loop 1 - pracuju na: ' + item);
//
//     var exists = false;
//     // console.log('existuje: ' + exists);
//
//     for (var index = 0; index < uniqueArray.length; index++) {
//         // console.log('for loop 2');
//
//         var item2 = uniqueArray[index];
//         // console.log('for loop 2 - pracuju na: ' + item2);
//
//         //console.log(item2);
//         if (item === item2) {     // go to next number in array ()
//             exists = true
//         }
//         //console.log(uniqueArray);
//     }
//
//     if(exists) {
//         console.log('existuje: ' + exists);
//     } else {
//         uniqueArray.push(item)
//     }
//
//
//
// }
// console.log('uniqueArray: ' + uniqueArray);

// PUSH exercise
// var emptyArray = [];
// emptyArray.push(2,3);
// console.log(emptyArray);


//console.log(array);
// console.log(array[0]);

// 1. approach  https://stackoverflow.com/questions/1960473/unique-values-in-an-array
// var uniqueNumber = Array.from(new Set(array));
// console.log(uniqueNumber);

// 2. aproach
// function toUnique(a, b, c) { //array,placeholder,placeholder
//     b = a.length;
//     while (c = --b)
//         while (c--) a[b] !== a[c] || a.splice(c, 1);
//     return a // not needed ;)
// }
// console.log(toUnique(array));

// 3. aproach
var unique = array.filter(function (item, index, array) {
    console.log('\n\nitem: ' + item);
    console.log('i ' + index);
    console.log('ar ' + array);
    console.log('array.indexOf(item) ' + array.indexOf(item));
    return array.indexOf(item) === index;
});
console.log(unique);

// // // 4. aproach
// function uniqueArray2(arr) {
//     var a = [];
//     for (var i=0, l=arr.length; i<l; i++)
//         if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
//             a.push(arr[i]);
//     return a;
// }
// console.log(uniqueArray2());


