<script lang='ts'>
  export let link: string;
	function handleClick() {
		window.open(link, '_blank');
	}
</script>

<style>
  .github-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 2em;
    border-radius: 1em;
    /* font-family: Arial, sans-serif; */
    /* font-size: 16px; */
    cursor: pointer;
    height: 4em;
  }

</style>

<section style="margin-left:auto; margin:1em;">
<button class="github-button" on:click={handleClick}>
		<img src="github-mark.svg" alt="GitHub" width="24" height="24" />
		<span style="margin-left: 8px;">View on GitHub</span>
</button>

</section>