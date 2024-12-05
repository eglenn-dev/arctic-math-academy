<script>
  import ProgressBar from "./ProgressBar.svelte";
  export let progressBars = [];
</script>
<div class="progress-info-card">
    {#each progressBars as progressBar}
        <ProgressBar {progressBar}/>
    {/each}
</div>