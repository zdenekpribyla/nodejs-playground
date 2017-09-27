var records = require('./file.json');


var nameProjectHours = records.map(function (record) {
   return {
       dev_name: record.dev_name,
       project: record.project,
       hours_spent: record.hours_spent
   }
});
console.log(nameProjectHours);