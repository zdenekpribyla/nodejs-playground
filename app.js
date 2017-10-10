// var file = require('./file.json');
var records = require('./file.json');


//get unique array with project name


var uniqueProjects = [];
// var uniqueProjects = [' Horizon (V)', ' Control Panel (V)'];

for (var i = 0; i < records.length; i++) {
    var record = records[i];
    //console.log(record.project);
    var projectName = record.project;

    console.log('\nprojectName: ' + projectName);

    for (var index = 0; index < uniqueProjects.length; index++) {
        var uniqueName = uniqueProjects[index];

        if (projectName === uniqueName) {

        }

        // if (uniqueName 'tam jeste neni')  {
        //     uniqueProjects.push(uniqueName);
        // } else { 'jdi dal'}

    }
}
console.log();



























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
//     // var projectName = file[i].project;
//     // var hoursSpent =  file[i].hours_spent;
//     // if (hoursPerProject[projectName]) {
//     //     hoursPerProject[projectName] = hoursPerProject[projectName] + hoursSpent;
//     // } else {
//     //     hoursPerProject[projectName] = hoursSpent;
//     // }
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


