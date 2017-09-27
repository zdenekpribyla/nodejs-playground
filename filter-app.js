var records = require('./file.json');


var modifyData = function (records, multiplier) {

    var results = [];
    for (var i = 0; i < records.length; i++) {
        var record = records[i];

        var object = {
            projectName: record.project,
            projectHours: multiplier === undefined ? record.hours_spent : record.hours_spent * multiplier
        };

        results.push(object);
    }
    return results;
};


// console.log(modifyData(records, 2));
console.log(modifyData(records));

