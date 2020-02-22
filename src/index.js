
exports.min = function min (array) {
	if (arguments.length === 0 || array.length === 0) return 0;

	const prepareArray = array.sort(sortArray);
	return prepareArray[0];
}

exports.max = function max (array) {
	if (arguments.length === 0 || array.length === 0) return 0;

	const prepareArray = array.sort(sortArray);
	return prepareArray[prepareArray.length - 1];
}

exports.avg = function avg (array) {
	if (arguments.length === 0 || array.length === 0) return 0;

	const sumArrayNumber = array.reduce((a, b) => a + b);
	return sumArrayNumber / array.length;
}

function sortArray(a, b) {
	return a - b;
}
