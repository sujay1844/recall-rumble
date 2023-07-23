<script lang='ts'>
	import { onMount } from "svelte";
	import { CardStatus, GameStatus, type CardInfo } from "$lib/types";
	import generateCards from "$lib/genCards";
	import Card from "$lib/Card.svelte";
	import { gameStatus } from "$lib/store";

	export let gridSize: number;

	let cards: CardInfo[] = [];

	onMount(() => {
		cards = generateCards(gridSize*gridSize);
	});

	$: {
		let selected = cards.filter(card => card.status === CardStatus.Selected);

		if(selected.length === 2) {
			if(selected[0].emoji == selected[1].emoji) {
				selected.forEach(card => card.status = CardStatus.Solved);
			} 
		}

		// Only allow 2 cards to be selected at a time
		if(selected.length > 2) {
			selected.forEach(card => card.status = CardStatus.Default);
		}

		// Check if all cards are solved
		if(cards.length > 1 && cards.every(card => card.status === CardStatus.Solved)) {
			$gameStatus = GameStatus.Won;
		}
	}


</script>

<section style="
		display: grid;
		grid-template-columns: repeat({gridSize}, 1fr);
		grid-template-rows: repeat({gridSize}, 1fr);
		margin: 0px;
		gap: 0px;
">
	{#each cards as card}
		<Card bind:info={card} />
	{/each}
</section>
