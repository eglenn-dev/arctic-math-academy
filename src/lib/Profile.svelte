<script>
  import Achievements from "./Achievements.svelte";
  import ProgressList from "./ProgressList.svelte";

</script>
<div class="info-card">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="#" alt="Profile Picture" />
    <!-- svelte-ignore a11y_missing_content -->
    <h2 class="username"></h2>
    <button>Edit Profile</button>
</div>
<div class="achievement-card">
    <h2>Achievements</h2>
    <ul>
        <Achievements />
    </ul>
</div>
<div class="progress-card">
    <h2>Progress</h2>
    <ProgressList />
</div>