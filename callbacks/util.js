function pause(ms) {
	let waitTill = new Date(new Date().getTime() + ms);
	while(waitTill > new Date()){}
}

module.exports.pause = pause;