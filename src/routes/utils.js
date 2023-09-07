export function padArraysToSameLength(A, B) {
	let lengthDifference = A.length - B.length;

	if (lengthDifference > 0) {
		B = B.concat(new Array(lengthDifference).fill(''));
	} else {
		A = A.concat(new Array(-lengthDifference).fill(''));
	}

	return [A, B];
}

export function replaceRandomLetter(A, B) {
	const mismatchedIndexes = [];
	for (let i = 0; i < A.length; i++) {
		if (A[i].path !== B[i].path) {
			mismatchedIndexes.push(i);
		}
	}

	if (mismatchedIndexes.length === 0) {
		return A;
	}

	const randomIndex = mismatchedIndexes[Math.floor(Math.random() * mismatchedIndexes.length)];
	A[randomIndex] = { ...B[randomIndex] };

	return A;
}
