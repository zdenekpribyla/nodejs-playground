var records = require('./file.json');
var _ = require('lodash');
var postRecords = require('./posts.json');

// for (var i = 0; i < postRecords.lenght; i++) {
//     var singlePost = postRecords[i]
// }
// console.log(singlePost);
//
//
//
//
// var singlePost = postRecords.map(funciton(record){
//     return record
// })
// console.log(singlePost);
//
// var uniqueCategories = singlePost.categories.filter(function(title, index, posts) {
//     return posts.indexOf(title) === index
// })
// console.log(uniqueCategories)
// var findAuthor = postRecords.map(function (record) {
//     return record.author
// })
// console.log(findAuthor)
//
//
// var findAuthor = [];
// for (var i = 0; i < postRecords.length; i++) {
//     var singlePost = postRecords[i];
//     for (var index = 0; index < singlePost.status.length; index++)
//          var postStatus = singlePost.status[index];
//     if (postStatus === 'publish') {
//         findAuthor.push(singlePost.author)
//     }
// }
// console.log(findAuthor);





// array.indexOf(item)
// var postRecordsFilter = postRecords.filter(function (record) {
//
//     var tags = record.tags;
//     // console.log(tags);
//     //
//     // console.log('index: ' + tags.indexOf(11205) );
//
//     return tags.indexOf(11205) >= 0
// });
//
// var onlyTitles = postRecordsFilter.map(function(title) {
//     return title.title.rendered
// });
// console.log('postRecordsFilter:');
// console.log(postRecordsFilter);
// console.log(onlyTitles);

// vylistuj vsechny clanky s tag 11205
// var postWithSpecifyTag = [];
// for (var i = 0; i < postRecords.length; i++) {
//     var singlePost = postRecords[i];
//     console.log('singlepost :' + singlePost);
//
//     for (var index = 0; index < singlePost.tags.length; index++) {
//         var singleTag = singlePost.tags[index];
//         //console.log('singletag: ' + singleTag + '\n' + singlePost.title.rendered);
//         if (singleTag === 9802) {
//             postWithSpecifyTag.push(singlePost.title.rendered)
//         }
//     }
// }
//  console.log(postWithSpecifyTag);

// //vylistuj vsechny zaznamy projektu records
// var allProjectsNameList = records.map(function (record) {
//    return record.project
// });
// //console.log(allProjectsNameList);
//
// // // //udelej seznam projektu - unikatni
// var uniqueProjectnNameList = allProjectsNameList.filter(function (item, index, array) {
//     // console.log('\n\nitem: ' + item);
//     // console.log('i ' + index);
//     // console.log('ar ' + array);
//     // console.log('array.indexOf(item) ' + array.indexOf(item));
//     return array.indexOf(item) === index;
// });
// console.log(uniqueProjectnNameList);


//vytahni vsechny optm soft > 3 hodiny

// var hoursSpentMoreThree = records.filter(function (record) {
//     return record.hours_spent > 3
// });
//
// console.log(hoursSpentMoreThree);

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