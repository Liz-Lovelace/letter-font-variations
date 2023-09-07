<script>
	import { onMount, tick } from 'svelte';
	import { SVG } from '@svgdotjs/svg.js';
	import letters from './letters.js';
	import { padArraysToSameLength, replaceRandomLetter } from './utils.js';

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

	let rows = 9;
	let columns = 4;

	let visibleLetters = [];
	let currentlyShowing;

	let timer;

	function switchLetters(target) {
		if (currentlyShowing !== 'alphabet') {
			target = 'alphabet';
		}

		if (timer) {
			clearInterval(timer);
		}

		[letters[target], visibleLetters] = padArraysToSameLength(letters[target], visibleLetters);

		timer = setInterval(async () => {
			visibleLetters = replaceRandomLetter(visibleLetters, letters[target]);

			await tick();
			redrawSvg();

			if (visibleLetters.every((val, i) => val.letter === letters[target][i].letter)) {
				currentlyShowing = target;
				clearInterval(timer);
			}
		}, 20);
	}
</script>

<div id="grid" style="--rows: {rows}; --columns: {columns};">
	{#each visibleLetters as { path, letter }, index}
		<div on:click={() => switchLetters(letter)} class="grid-item">
			<div id={`svg-container-${index}`} class="letter-container" />
		</div>
	{/each}
</div>

<style>
	#grid {
		display: grid;
		grid-template-rows: repeat(var(--rows), 1fr);
		grid-template-columns: repeat(var(--columns), 1fr);
		width: 100vw;
		height: calc(100vw * var(--rows) / var(--columns));
		max-height: 100vh;
		max-width: calc(100vh * var(--columns) / var(--rows));
		margin: auto;
		background-color: #eee;
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
</style>
