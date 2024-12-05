<script>
    export let data = {};

</script>
<div class="achievement-info-card">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="{data.picture}" alt="Achievement Picture" />
    <!-- svelte-ignore a11y_missing_content -->
    <h2 class="achievement-name">{data.name}</h2>
    <p class="achievement-description">{data.description}</p>
    <p class="achievement-date">{data.date}</p>
</div>
<style>
    .achievement-info-card{
        display: flex;
        flex-direction: row;
        border: 9px solid #f3f3f3;
        border-radius: 10px;
        padding: 1.5rem;
        background-color: rgba(0, 255, 0, 0.1);
    }
</style>