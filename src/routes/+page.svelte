<script lang='ts'>
	import { onMount } from "svelte";
	import { CardStatus, GameStatus, type CardInfo } from "$lib/types";
	import generateCards from "$lib/genCards";
	import Card from "$lib/Card.svelte";

	let cards: CardInfo[] = [];
	let gameStatus: GameStatus = GameStatus.Playing;
	let gridSize = 6;
	onMount(() => {
		cards = generateCards(gridSize);
	})

	$: {
		let selected = cards.filter(card => card.status === CardStatus.Selected);
		if(selected.length === 2) {
			if(selected[0].content == selected[1].content) {
				selected.forEach(card => card.status = CardStatus.Solved);
			} else {
				selected.forEach(card => card.status = CardStatus.Default);
			}
		}

		if(cards.length > 1 && cards.every(card => card.status === CardStatus.Solved)) {
			gameStatus = GameStatus.Won;
		}
	}


</script>

<section>
	{#if gameStatus == GameStatus.Won}
		<h1>You won!</h1>
	{/if}
	{#each cards as card}
		<Card bind:info={card} />
	{/each}
</section>