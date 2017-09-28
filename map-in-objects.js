var records = require('./file.json');
var _ = require('lodash');

//vylistuj vsechny zaznamy projektu
var allProjectsNameList = records.map(function (record) {
   return record.project
});
//console.log(allProjectsNameList);

// //udelej seznam projektu - unikatni
var uniqueProjectnNameList = allProjectsNameList.filter(function (item, index, array) {
    // console.log('\n\nitem: ' + item);
    // console.log('i ' + index);
    // console.log('ar ' + array);
    // console.log('array.indexOf(item) ' + array.indexOf(item));
    return array.indexOf(item) === index;
});
console.log(uniqueProjectnNameList);


//vytahni vsechny optm soft > 3 hodiny

// var hoursSpentMoreThree = records.filter(function (record) {
//     return record.hours_spent > 3
// });

//console.log(hoursSpentMoreThree);

// var onlyOptumSoftHours = records.filter(function (record) {
//     return record.project === 'Red Bull (V)' && record.hours_spent > 3
// });
//
// console.log(onlyOptumSoftHours);
// console.log(onlyOptumSoftHours.length);
//
// var sum = _.sumBy(onlyOptumSoftHours, function (o) {
//     return o.hours_spent;
// });
// console.log(sum);





















//1. vytahni jen tri keys
// var nameProjectHours = records.map(function (record) {
//    return {
//        dev_name: record.dev_name,
//        project: record.project,
//        hours_spent: record.hours_spent
//    }
// });
// console.log(nameProjectHours);

//2. vytahni jen working session s delkou prace nad 1 h

// var moreHoursWorking = records.filter(function (record) {
//     return record.hours_spent > 5
//
// });
// console.log(moreHoursWorking);
//
// var idPerHours = moreHoursWorking.map(function (record) {
//     return record.id
// });
// console.log(idPerHours);