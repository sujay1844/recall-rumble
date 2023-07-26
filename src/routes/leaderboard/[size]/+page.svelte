<script lang='ts'>
    import { goto } from "$app/navigation";

    export let data;
</script>

<section>
    <header style="display:flex; flex-direction:row;">
        <button on:click={() => {goto('/leaderboard/2')}}>2x2</button>
        <button on:click={() => {goto('/leaderboard/4')}}>4x4</button>
        <button on:click={() => {goto('/leaderboard/6')}}>6x6</button>
        <button on:click={() => {goto('/leaderboard/8')}}>8x8</button>
        <button style="margin-left:auto;" on:click={() => {goto('/')}}>Play Game</button>
    </header>
    <ul>
        {#each data.entries as item}
            <li>{item.name} - {item.time}</li>
        {/each}
    </ul>
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