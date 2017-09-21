var file = require('./file.json');


//console.log(file.length);


//
var totalHours = 0;
var workSessions = 0;
var hoursPerProject = {
    // projectName: 'test project',
    // 'Red Bull (V)': 'test 2'
};




for (var i = 0; i < file.length; i++) {

    //hoursPerProject - display all projects name and sum of spent hours
    var projectName = file[i].project; // = Red Bull (V)
    var hoursSpent =  file[i].hours_spent;

    if (hoursPerProject[projectName]) {
        hoursPerProject[projectName] = hoursPerProject[projectName] + hoursSpent;
    } else {
        hoursPerProject[projectName] = hoursSpent;
    }

    // var object = file[i];
    //console.log(uniqueName);
    //
    // //display hours and and number of work sessions for Red Bull project
    // if (object.project === 'Red Bull (V)') {
    //     // console.log(object);
    //     //console.log(object.hours_spent);
    //     totalHours = totalHours + object.hours_spent;
    //     workSessions = workSessions + 1;
    // }
}
//console.log(totalHours);
//console.log(workSessions);
console.log(hoursPerProject);
