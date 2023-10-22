function removeStrokeAttribute(pathString) {
	return pathString.replace(/\s?stroke="[^"]*"/, '');
}

function splitSvgDump(str) {
	return str
		.split(/<rect [^>]*\/>/)
		.map((part) => part.trim())
		.filter((part) => part !== '');
}

function svgFilesToPaths(rawSvgFiles) {
	const letters = { alphabet: [] };
	for (const [letter, svgString] of Object.entries(rawSvgFiles)) {
		const pathRegex = /<path[^>]*>/g;
		const foundPaths = svgString.match(pathRegex);
		if (foundPaths) {
			letters[letter] = foundPaths.map(removeStrokeAttribute).map((path) => ({
				path,
				letter
			}));

			letters.alphabet.push({
				path: foundPaths[0],
				letter
			});
		} else {
			letters[letter] = [];
		}
	}
	return letters;
}

export const specialPaths = {
	question: `<path d="M14.3333 43C14.3333 43.5523 13.8855 44 13.3333 44M14.3333 43C14.3333 42.4477 13.8855 42 13.3333 42M14.3333 43H12.3333M13.3333 44C12.781 44 12.3333 43.5523 12.3333 43M13.3333 44V42M12.3333 43C12.3333 42.4477 12.781 42 13.3333 42M2.83325 13.5C2.83325 11 5.83325 3 13.3333 3C20.8333 3 24.8333 7 24.8333 13.5C24.8333 21 13.3333 21.5 13.3333 31" stroke="#FF0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
	plus: `<path d="M3 18.1395H32M17.5 3V34" stroke="#FF0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
	back: `<path d="M36.5 21.5H2.5M2.5 21.5L21.5 2.5M2.5 21.5L21.5 40.5" stroke="#FF0000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
};

function filterObject(obj) {
	const filtered = {};
	for (const key in obj) {
		if (obj.hasOwnProperty(key) && obj[key].length > 0) {
			filtered[key] = obj[key];
		}
	}
	return filtered;
}

export default async function letters() {
	let res = await fetch('/letters');
	let fileContent = await res.text();
	return filterObject(svgFilesToPaths(splitSvgDump(fileContent)));
}
