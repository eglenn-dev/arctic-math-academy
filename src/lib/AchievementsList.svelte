<script>
    import Achievement from "./Achievement.svelte";
    export let achievements = [{
        name: "Achievement Name",
        description: "Achievement Description",
        picture: "Achievement Picture",
        date: "Achievement Date",
        user: "Achievement User"
    },
    {
        name: "Achievement Name",
        description: "Achievement Description",
        picture: "Achievement Picture",
        date: "Achievement Date",
        user: "Achievement User"
    }];
</script>
<div class="achievements-list">
    <ul>
        {#each achievements as achievement}
            <li><Achievement data={achievement}/></li>
        {/each}
    </ul>
</div>
<style>
    .achievements-list{
        display: flex;
        flex-direction: row;
        padding: 1.5rem;
    }
</style>