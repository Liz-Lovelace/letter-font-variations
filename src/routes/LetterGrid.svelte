<script>
	import { SVG } from '@svgdotjs/svg.js';
	import { redrawSvg } from './utils.js';
	import {
		padArraysToSameLength,
		padArrayToMinLength,
		replaceRandomLetter,
		deepCopy
	} from './utils.js';

	export let visualContext = 'vc-main';
	export let visibleLetters = [];
	export let minRows = 9;
	export let rows = minRows;
	export let columns = 4;
	export let onLetterClick;
</script>

<div
	id="grid"
	class={visualContext}
	style="--rows: {rows}; --minRows: {minRows}; --columns: {columns};"
>
	{#each padArrayToMinLength(visibleLetters, minRows * columns) as { path, letter }, index}
		<div class="grid-item" on:click={() => onLetterClick(letter)}>
			<div class="letter-container" id={`svg-container-${index}`} />
		</div>
	{/each}
</div>

<style>
	#grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		margin: auto;
		background-color: #eee;
		padding: 0 30px;
	}

	.vc-main {
		width: calc(100vh * var(--columns) / var(--minRows));
	}

	.vc-about {
		width: auto;
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

	.vc-about .letter-container svg {
		fill: #f00;
	}

	.vc-main .letter-container:empty {
		background-image: url('/dot.svg');
		background-position-x: center;
		background-position-y: center;
		background-size: contain;
	}
</style>
