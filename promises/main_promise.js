let sum = require('./sum_promise');

let promise = sum.sumAsync(5,6);

promise.then(
    function(data) {
       console.log("Sum is: \n" + data);
    }) 
   .catch(function(err) {
       console.log(err);
   });