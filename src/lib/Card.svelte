<script lang='ts'>
	import { CardStatus, type CardInfo } from "$lib/types";
	export let info: CardInfo;
	let bg: string = "white";
	function select() {

		switch(info.status) {

			case CardStatus.Default:

				info.status = CardStatus.Selected;
				// flip animation
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
				bg = "white";
				break;
			case CardStatus.Selected:
				bg = "green";
				break;
			case CardStatus.Solved:
				bg = "grey";
				break;
		}
	}

</script>

<button on:click={select} style=" background-color: {bg}">
	{#if info.status === CardStatus.Default}
		foo
	{:else if (info.status == CardStatus.Selected) || (info.status == CardStatus.Solved)}
		{info.content}
	{/if}
</button>

<style>
	button {
		width: 5em;
		height: 5em;
	}
</style>