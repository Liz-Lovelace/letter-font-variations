<script>
	import LetterGrid from '../LetterGrid.svelte';
	import { redrawSvg } from '../utils.js';
	import letters from '../letters.js';
	import { onMount } from 'svelte';

	let visibleLetters;

	let rows;
	let minRows;
	let columns = 12;

	onMount(async () => {
		visibleLetters = Object.entries(await letters())
			.filter(([letter]) => letter !== 'alphabet')
			.map(([_, paths]) => paths)
			.flat();
		rows = Math.ceil(visibleLetters.length / columns);
		minRows = rows;
		await new Promise((r) => setTimeout(r, 50));
		redrawSvg(visibleLetters, '#f00');
	});

	let switchLetters = () => {};
</script>

<main>
	<p>
		Hi! <br />
		My name is <a href="https://instagram.com/itimpng" class="link">Tim izhanov</a>, I am a young
		graphic designer from Moscow. <br />
		You must be quite curious to be on this page ;)
	</p>
	<p>
		I see this website as a <strong>tool for graphic designers</strong>, who sometimes struggle to
		pick just the perfect letter for their logotypes and posters. <br />
	</p>
	<p>
		Also, I hope this place will become <strong>a home for all letter variants</strong>, since there
		are so many of them. <br />
	</p>
	<p>
		Web design by <a href="https://liz.sex" class="link">Liz Lovelace</a>
	</p>

	<LetterGrid
		{visibleLetters}
		{rows}
		{minRows}
		{columns}
		{switchLetters}
		visualContext="vc-about"
	/>
</main>
