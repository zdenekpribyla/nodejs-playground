//var file = require('./file.json');
var posts = require('./posts.json');
var genData = require('./generated.json');


//only na of female

//console.log(onlyFemale);

// only age +30

//console.log(higherThirty);

//only name and age






//console.log(eyeColorArray);



// only age +30


//
// var results = [
//     {
//         author: 10,
//         uniqueTags: [2, 5, 10]
//     }
// ];

// author: tags

//console.log('authorAndTagsList');
var authorAndTagsList = posts.map(function (record) {
    return {
        author: record.author,
        tags: record.tags
    }
});
// console.log(authorAndTagsList);

var allAuthorsIds = posts.map(function (record) {
    return record.author
});
// console.log(allPostList);


var uniqueAuthorsIds = allAuthorsIds.filter(function (authorId, index, allAuthorsIdsArray) {
    return allAuthorsIdsArray.indexOf(authorId) === index

});
// console.log(uniqueAuthor);

var uniqueAuthorsObjects = uniqueAuthorsIds.map(function (authorId) {
    return {
        author: authorId
    }
});
// console.log(uniqueAuthorsObjects);


var uniqueAuthorsAndAllTags = uniqueAuthorsObjects.map(function (uniqueAuthorObject) {


    authorAndTagsList.forEach(function (authorObject) {

        // console.log('\nauthorObject');
        // console.log(authorObject);

        if (uniqueAuthorObject.author === authorObject.author) {


            return {
                author: uniqueAuthorObject.author,
                tags: [authorObject.tags]
            }
        }
    });

    // console.log('\n\nuniqueAuthorsAndAllTags');
});

// console.log(uniqueAuthorsAndAllTags);


// for (var i = 0; i < authorObject.length; i++) {
//     var uniqueObject = authorObject[i];
//     if (uniqueObject === authorAndTagsList.tags) {
//         return {
//             'author: ': authorObject,
//             'tags: ': authorAndTagsList.tags
//         }
//     }
//     console.log(uniqueObject);
// }


// var authorAndTags = [];
//
// for (var i = 0; i < posts.length; i++) {
//     var singlePost = posts[i];
//
//     authorAndTags.push( {'author': singlePost.author, 'tags': singlePost.tags} )
// }
//
// console.log(authorAndTags);


//get unique array with project name


// var uniqueProjects = [];
// // var uniqueProjects = [' Horizon (V)', ' Control Panel (V)'];
//
// for (var i = 0; i < records.length; i++) {
//     var record = records[i];
//     //console.log(record);
//     var projectName = record.project;
//     //console.log(projectName);
//     var uniqueProject = projectName.filter(function (item, index, record) {
//             return record.indexOf(item) === index
//         }
//     );
//     console.log(uniqueProject);
// }


//
// //console.log(file.length);
//
//
// //
// var totalHours = 0;
// var workSessions = 0;
// var hoursPerProject = {
//     // projectName: 'test project',
//     // 'Red Bull (V)': 'test 2'
// };
//
//
// for (var i = 0; i < file.length; i++) {
//
//     //1. display only unique names of project
//     // var projectNameList = file[i].project;
//     // if (uniqueProjectNameList[projectNameList]) {
//     //     uniqueProjectNameList[projectNameList] = uniqueProjectNameList
//     // }
//     // else {
//     //     uniqueProjectNameList[projectNameList]
//     // }
//
//
//
//     //2. display unique names of project and number of working sessions
//     var projectName = file[i].project;
//     var workingSessions = file[i];
//     if (sessionsPerProject[projectName]) {
//         sessionsPerProject[projectName] = sessionsPerProject[projectName] + workingSessions
//     }
//     else {
//         sessionsPerProject[projectName] = workingSessions + 1;
//     }
//
//
//     // hoursPerProject - display all projects name and sum of spent hours on every project
//     var projectName = file[i].project;
//     var hoursSpent =  file[i].hours_spent;
//     if (hoursPerProject[projectName]) {
//         hoursPerProject[projectName] = hoursPerProject[projectName] + hoursSpent;
//     } else {
//         hoursPerProject[projectName] = hoursSpent;
//     }
//     //
//     // //display hours and and number of work sessions for Red Bull project
//     // var object = file[i];
//     // if (object.project === 'Red Bull (V)') {
//     //     // console.log(object);
//     //     // console.log(object.hours_spent);
//     //     totalHours = totalHours + object.hours_spent;
//     //     workSessions = workSessions + 1;
//     // }
// }
// // console.log(totalHours);
// //  console.log(workSessions);
// // console.log(hoursPerProject);
// //console.log(uniqueProjectNameList);
// console.log(sessionsPerProject);
//


