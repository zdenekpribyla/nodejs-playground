var records = require('./file.json');


var result = [];
for (var i = 0; i < records.length; i++) {
    allRecords = records[i];
    var objectsName = allRecords.project;
    var objectSpentHours = allRecords.hours_spent;
    //console.log(objectsName);
    var object = {
        projectName: objectsName,
        projectHours: objectSpentHours,
        projectHoursDouble: objectSpentHours * 2
    };
    result.push(object)
}
console.log(result);
