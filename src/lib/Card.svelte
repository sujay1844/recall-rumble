<svelte:head>
	<meta charset="utf-8">
</svelte:head>
<script lang='ts'>
	import { CardStatus, type CardInfo } from "$lib/types";
	export let info: CardInfo;

	let bg: string = "white";

	async function select() {

		switch(info.status) {

			case CardStatus.Default:
				info.status = CardStatus.Selected;
				setTimeout(() => {
					if(info.status == CardStatus.Selected)
						info.status = CardStatus.Default;
				}, 2000);
				break;

			case CardStatus.Selected:
				// Deselect
				info.status = CardStatus.Default;
				break;
		}
	}
	$:{
		switch(info.status) {
			case CardStatus.Default:
			case CardStatus.Selected:
				bg = "white";
				break;
			case CardStatus.Solved:
				bg = "grey";
				break;
		}
	}

</script>

<button on:click={select} style=" background-color: {bg}">
	{#if info.status === CardStatus.Default}
		&#128293;
	{:else if (info.status == CardStatus.Selected) || (info.status == CardStatus.Solved)}
		{String.fromCodePoint(info.emoji)}
	{/if}
</button>

<style>
	button {
		height: 5em;
		margin: 0px;
		padding: auto;
		font-size: 2em;
	}

</style>