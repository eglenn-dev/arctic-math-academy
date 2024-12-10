<script>
  import AchievementsList from "./AchievementsList.svelte";
  import ProgressList from "./ProgressList.svelte";

</script>
<h1>Hi, {name}</h1>
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
        <AchievementsList />
    </ul>
</div>
<div class="progress-card">
    <h2>Progress</h2>
    <ul>
        <ProgressList />
    </ul>
</div>
<style>
    .info-card{
        display: flex;
        flex-direction: row;
        border: 9px solid #f3f3f3;
        border-radius: 10px;
        padding: 1.5rem;
        background-color: rgba(0, 0, 255, 0.1);
    }
</style>