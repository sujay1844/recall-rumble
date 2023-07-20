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
				// flip animation
				setTimeout(() => {
					if(info.status == CardStatus.Selected)
						info.status = CardStatus.Default;
				}, 2000);
				break;

			case CardStatus.Selected:

				info.status = CardStatus.Default;
				// flip animation
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
		/* width: 5em; */
		height: 5em;
		margin: 0px 0px;
		font-size: 2em;
	}

</style>