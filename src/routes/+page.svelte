<script>
	import { onMount, tick } from 'svelte';
	import { SVG } from '@svgdotjs/svg.js';
	import lettersPromise, { specialPaths } from './letters.js';
	import LetterGrid from './LetterGrid.svelte';
	import { redrawSvg } from './utils.js';
	import {
		padArraysToSameLength,
		padArrayToMinLength,
		replaceRandomLetter,
		deepCopy,
		trimLetters
	} from './utils.js';

  let letters;

	onMount(() => {
    letters = lettersPromise();
		switchLetters('alphabet');
	});

	let minRows = 9;
	let rows = minRows;
	let columns = 4;

	let visibleLetters = [];
	let currentlyShowing;

	let timer;

	async function switchLetters(target) {
		if (target == 'redirect-about') {
			window.location.href = '/about';
			return;
		}
		if (target == 'redirect-add') {
			window.location.href = '/submit-new';
			return;
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
		if (currentlyShowing !== 'alphabet' || target == undefined) {
			target = 'alphabet';
		}

		if (timer) {
			clearInterval(timer);
		}

		let targetLetters = deepCopy((await letters)[target]);

		if (target == 'alphabet') {
			targetLetters = padArrayToMinLength(targetLetters, minRows * columns);
			// todo: the color of the specialPaths might be different in different browsers.
			targetLetters[targetLetters.length - 2] = {
				path: specialPaths.question,
				letter: 'redirect-about'
			};
			targetLetters[targetLetters.length - 1] = { path: specialPaths.plus, letter: 'redirect-add' };
			// todo: add back button on the individual letter pages
		}

		[targetLetters, visibleLetters] = padArraysToSameLength(targetLetters, visibleLetters);

		rows = Math.max(minRows, Math.ceil(targetLetters.length / columns));

		timer = setInterval(async () => {
			visibleLetters = replaceRandomLetter(visibleLetters, targetLetters);

			await tick();
			redrawSvg(visibleLetters, '#191919');

			if (visibleLetters.every((val, i) => val.letter === targetLetters[i].letter)) {
				currentlyShowing = target;
				clearInterval(timer);
				visibleLetters = trimLetters(visibleLetters);
				rows = Math.max(minRows, Math.ceil(visibleLetters.length / columns));
				visibleLetters = padArrayToMinLength(visibleLetters, rows * columns);
			}
		}, 20);
	}
</script>

<LetterGrid {visibleLetters} {rows} {minRows} {columns} onLetterClick={switchLetters} />
