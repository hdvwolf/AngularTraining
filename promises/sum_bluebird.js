function sum(a, b, callback) {
	let err = null;
	if(a < 0 || b < 0)
		err = "Argument must not be negative!";
	let result = a + b;
	setImmediate(function(){
        callback(err, result);
    });
}



module.exports.sum = sum;

