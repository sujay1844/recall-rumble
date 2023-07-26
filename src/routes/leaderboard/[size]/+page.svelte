<script lang='ts'>
    import { goto } from "$app/navigation";

    export let data;
</script>

<section>
    <header style="display:flex; flex-direction:row;">
        <h3>Other <br> sizes:</h3>
        <button on:click={() => {goto('/leaderboard/2')}}>2x2</button>
        <button on:click={() => {goto('/leaderboard/4')}}>4x4</button>
        <button on:click={() => {goto('/leaderboard/6')}}>6x6</button>
        <button on:click={() => {goto('/leaderboard/8')}}>8x8</button>
        <button style="margin-left:auto;" on:click={() => {goto('/')}}>Back to Main Menu</button>
    </header>
    <div style="margin-left:auto; margin-right:auto;text-align:center;font-size:2em;">
        <h1> {data.size}x{data.size} </h1>
    </div>
    <div>
        {#each data.entries as item, idx}
            <p>{idx+1}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.time}secs</p>
        {/each}
    </div>
</section>

<style>
    button {
        margin: 1em;
        padding: 1em;
        padding-left: 1.5em;
        padding-right: 1.5em;
        border-radius: 1em;
    }
</style>