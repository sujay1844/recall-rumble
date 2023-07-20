<script lang='ts'>
	import { CardStatus, type CardInfo } from "$lib/types";
	import { flip } from "svelte/animate";
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

<section>
	<button on:click={select} style=" background-color: {bg}">
		{#if info.status === CardStatus.Default}
			foo
		{:else if (info.status == CardStatus.Selected) || (info.status == CardStatus.Solved)}
			{info.content}
		{/if}
	</button>
</section>

<style>
	button {
		width: 5em;
		height: 5em;
	}

</style>