<script>
	import { onMount, tick } from 'svelte';
	import { SVG } from '@svgdotjs/svg.js';
	import letters from './letters.js';
	import {
		padArraysToSameLength,
		padArrayToMinLength,
		replaceRandomLetter,
		deepCopy
	} from './utils.js';

	onMount(() => {
		switchLetters('alphabet');
	});

	function redrawSvg() {
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

			const svg = SVG().addTo(svgElem).size('100%', '100%').fill('none');
			const path = svg.svg(letter.path);
			//todo: small letters sometimes should have whitespace above or below them
			const box = path.bbox();
			svg.viewbox(box.x - 5, box.y - 5, box.width + 10, box.height + 10);
		});
	}

	let minRows = 9;
	let rows = minRows;
	let columns = 4;

	let visibleLetters = [];
	let currentlyShowing;

	let timer;

	function switchLetters(target) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		if (currentlyShowing !== 'alphabet') {
			target = 'alphabet';
		}

		if (timer) {
			clearInterval(timer);
		}

		let targetLetters = deepCopy(letters[target]);

		[targetLetters, visibleLetters] = padArraysToSameLength(targetLetters, visibleLetters);

		rows = Math.max(minRows, Math.ceil(targetLetters.length / columns));

		timer = setInterval(async () => {
			visibleLetters = replaceRandomLetter(visibleLetters, targetLetters);

			await tick();
			redrawSvg();

			if (visibleLetters.every((val, i) => val.letter === targetLetters[i].letter)) {
				currentlyShowing = target;
				clearInterval(timer);
				visibleLetters = visibleLetters.filter((letter) => letter.path);
				rows = Math.max(minRows, Math.ceil(visibleLetters.length / columns));
			}
		}, 20);
	}
</script>

<div id="grid" style="--rows: {rows}; --minRows: {minRows}; --columns: {columns};">
	{#each padArrayToMinLength(visibleLetters, minRows * columns) as { path, letter }, index}
		<div class="grid-item" on:click={() => switchLetters(letter)}>
			<div class="letter-container" id={`svg-container-${index}`} />
		</div>
	{/each}
</div>

<style>
	#grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		width: calc(100vh * var(--columns) / var(--minRows));
		margin: auto;
		background-color: #eee;
		padding: 0 30px;
	}

	.grid-item {
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1 / 1;
	}

	.letter-container {
		width: 60%;
		height: 60%;
	}

	.letter-container:empty {
		background-image: url('/dot.svg');
		background-position-x: center;
		background-position-y: center;
		background-size: contain;
	}
</style>
