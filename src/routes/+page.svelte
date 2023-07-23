<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/white.css"
  />
</svelte:head>

<script>
	import CardGrid from "$lib/CardGrid.svelte";
	import { gameStatus } from "$lib/store";
	import { GameStatus } from "$lib/types";
	import { Slider } from "carbon-components-svelte";
	let gridSize = 2;
</script>

{#if $gameStatus == GameStatus.Default}

	<button on:click={() => $gameStatus = GameStatus.Playing}>Start</button>
	<Slider bind:value={gridSize} min={2} max={8} step={2} />

{:else if $gameStatus == GameStatus.Playing}

	<button on:click={() => $gameStatus = GameStatus.Default}>Exit</button>
	<CardGrid {gridSize}/>

{:else if $gameStatus == GameStatus.Won}

	<h1>You won!</h1>
	<button on:click={() => $gameStatus = GameStatus.Default}>Play again</button>

{/if}
