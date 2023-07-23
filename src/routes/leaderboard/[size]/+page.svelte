<script lang='ts'>
    import { goto } from "$app/navigation";

    export let data;
</script>

<section>
    <button on:click={() => {goto('/leaderboard/2')}}>2x2</button>
    <button on:click={() => {goto('/leaderboard/4')}}>4x4</button>
    <button on:click={() => {goto('/leaderboard/6')}}>6x6</button>
    <button on:click={() => {goto('/leaderboard/8')}}>8x8</button>
    {#each data.entries as item}
        <p>{item.name} - {item.time}</p>
    {/each}
</section>