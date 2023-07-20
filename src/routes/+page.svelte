<script lang='ts'>
	import { onMount } from "svelte";
	import { CardStatus, GameStatus, type CardInfo } from "$lib/types";
	import generateCards from "$lib/genCards";
	import Card from "$lib/Card.svelte";

	let cards: CardInfo[] = [];
	let gameStatus: GameStatus = GameStatus.Playing;
	let gridSize = 4;

	function restart() {
		cards = generateCards(gridSize);
		gameStatus = GameStatus.Playing;
	}

	onMount(restart);

	$: {
		let selected = cards.filter(card => card.status === CardStatus.Selected);
		if(selected.length === 2) {
			if(selected[0].content == selected[1].content) {
				selected.forEach(card => card.status = CardStatus.Solved);
			} 
		}
		if(selected.length > 2) {
			selected.forEach(card => card.status = CardStatus.Default);
		}

		if(cards.length > 1 && cards.every(card => card.status === CardStatus.Solved)) {
			gameStatus = GameStatus.Won;
		}
	}


</script>

{#if gameStatus == GameStatus.Won}
	<h1>You won!</h1>
	<button on:click={restart}>Restart</button>
{/if}
<section>
	{#each cards as card}
		<Card bind:info={card} />
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		gap: 0px;
	}
</style>