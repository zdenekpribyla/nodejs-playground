var _ = require('lodash');

var records = require('./file.json');

//var numberObjects = records.length;
//console.log(numberObjects);

var projectName =_.countBy(records, 'project');
console.log(projectName);

// var result = _.keysIn(projectName);
// console.log(result);

var result = [];
_.forEach(projectName, function(value, key) {

    var currentProject = _.filter(records, {"project": key});
    var currentProjectHours = _.sumBy(currentProject, 'hours_spent');

    var object = {
        name: key,
        sessions: value,
        sum: currentProjectHours.toFixed(2)
    };
    // console.log(object);
    result.push(object)
});
console.log(result);

console.log('plain js aproach');
for (var index = 0; index < result.length; index++) {
    var arrangeResult = result[index];
    console.log(arrangeResult.name+ ' ' + arrangeResult.sessions + ' ' + arrangeResult.sum);
}
//add row
console.log('\nLodash js aproach');
_.forEach(result, function(value, key) {
    console.log(value.name + '\t\t' + value.sessions + '\t\t' + value.sum);
});

//console.log(result[0].name+ ' ' + result[0].sessions + ' ' + result[0].sum);



//console.log(result.name+ ' ' + result.sessions + ' ' + result.sum);



// totalHours = _.sumBy(records, 'hours_spent');
// console.log(totalHours);
//
// var redBullProject = _.filter(records, {"project": "Red Bull (V)"});
// //console.log(redBullProject);
//
// var redBullProjectHours = _.sumBy(redBullProject, 'hours_spent');
// console.log(redBullProjectHours);


// var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
//
// _.sumBy(objects, function(o) { return o.n; });
// // => 20


//console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));


// var uniqueProjects = _.filter(records, {'project': 'Red Bull (V)'});
// console.log(uniqueProjects);
// console.log(uniqueProjects.length);


// var totalProjectHours = _.sumBy(uniqueProjects, 'hours_spent');
// console.log(totalProjectHours);


// _.forEach(uniqueProjects, function(object) {
//     console.log(object.description);
// });