var sum = require('./sum_bluebird');
let bluebird = require('bluebird');
var sum = bluebird.promisifyAll(sum);
let promise = sum.sumAsync(5,6);

promise.then(
    function(data) {
       console.log("Sum is: \n" + data);
    }) 
   .catch(function(err) {
       console.log(err);
   });