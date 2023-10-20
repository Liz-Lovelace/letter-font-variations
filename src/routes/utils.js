import { SVG } from '@svgdotjs/svg.js';

export function padArraysToSameLength(A, B) {
	let lengthDifference = A.length - B.length;

	if (lengthDifference > 0) {
		B = B.concat(new Array(lengthDifference).fill(''));
	} else {
		A = A.concat(new Array(-lengthDifference).fill(''));
	}

	return [A, B];
}

export function padArrayToMinLength(arr, minLength) {
	let lengthDifference = minLength - arr.length;

	if (lengthDifference > 0) {
		arr = arr.concat(new Array(lengthDifference).fill(''));
	}

	return arr;
}

export function trimLetters(arr) {
	while (arr.length > 0 && !arr[arr.length - 1].path) {
		arr.pop();
	}
	return arr;
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

export function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj));
}

export function redrawSvg(visibleLetters, stroke) {
	visibleLetters.forEach((letter, index) => {
		let svgElem = document.getElementById(`svg-container-${index}`);
		if (letter.path && svgElem.firstChild) {
			const oldPath = svgElem.firstChild.firstChild.getAttribute('d');
			if (letter.path.includes(oldPath)) {
				return;
			}
		}

		svgElem.innerHTML = '';
		if (!letter.path) {
			return;
		}

		const svg = SVG().addTo(svgElem).size('100%', '100%').fill('none').stroke(stroke);

		const path = svg.svg(letter.path);
		const box = path.bbox();
		svg.viewbox(box.x - 5, box.y - 5, box.width + 10, box.height + 10);
	});
}
