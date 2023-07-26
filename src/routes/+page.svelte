<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/white.css"
  />
</svelte:head>

<script lang='ts'>
	import CardGrid from "$lib/CardGrid.svelte";
	import { gameStatus, startTime } from "$lib/store";
	import { GameStatus } from "$lib/types";
	import { Slider } from "carbon-components-svelte";
    import type { ActionData } from "./$types";
    import { goto } from "$app/navigation";
	import GithubLink from "$lib/GithubLink.svelte";
	let gridSize = 4;
	let time = 0;
	let name = '';
	export let form: ActionData | null ;

	$: {
		switch($gameStatus) {
			case GameStatus.Default:
				time = 0;
				break;
			case GameStatus.Playing:
				$startTime = Date.now();
				break;
			case GameStatus.Won:
				time = (Date.now() - $startTime) / 1000;
				break;
		}
	}

</script>

<header style="display:flex; flex-direction:row; justify-content:flex-end;">
		<button style="height:4em;" on:click={() => goto('/leaderboard/4')}>&#127942;&nbsp;LeaderBoard</button>
		<GithubLink link='https://github.com/sujay1844/recall-rumble'/>

		{#if $gameStatus === GameStatus.Playing}
			<button on:click={() => $gameStatus = GameStatus.Default}>Back to Main Menu</button>
		{/if}
</header>

{#if $gameStatus == GameStatus.Default}

	<div>
		{#if form}
			{#if form.success}
				<p>Added to leaderboard!</p>
			{:else if form.error}
				<p>Failed to add to leaderboard</p>
			{/if}
		{/if}
		<h1>Recall Rumble</h1>
		<button on:click={() => $gameStatus = GameStatus.Playing}>Start</button>
		<Slider bind:value={gridSize} min={2} max={8} step={2} maxLabel={'8x8'} minLabel={'2x2'} labelText={'Grid Size'} hideTextInput={true} />
		
	</div>

{:else if $gameStatus == GameStatus.Playing}

	<CardGrid {gridSize}/>

{:else if $gameStatus == GameStatus.Won}

	<div>
		<h1>You won in {time} seconds!</h1>
		<button on:click={() => $gameStatus = GameStatus.Default}>Play again</button>

		<form method="POST" style="display:flex; flex-direction: row; margin-top: 10%;">
			<input name="name" type="text" placeholder="Name" bind:value={name} style="margin: 1em; border-radius:0.5em; padding-left: 1em;">
			<input name="time" type="hidden" bind:value={time}>
			<input name="gridSize" type="hidden" bind:value={gridSize}>
			<button on:click={() => {}}>Add to leaderboard</button>
		</form>

	</div>

{/if}

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20%;
	}
	button {
		margin: 1em;
		padding: 1em;
		padding-left: 2em;
		padding-right: 2em;
		border-radius: 1em;
	}
</style>