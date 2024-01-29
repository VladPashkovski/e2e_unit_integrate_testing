const delay = (callback, mss) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(callback());
		}, mss);
	});
};

module.exports = delay;
