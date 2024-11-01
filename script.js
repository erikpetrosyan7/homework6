function invertObj(obj) {
	let clone = {};
	for (let key in obj) {
		clone[obj[key]] = key;
	}
	return clone;
}
invertObj({ a: '1', b: '2' });
