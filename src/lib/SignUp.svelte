<script>

</script>


<div>
    <h2> Create an account here!</h2>
    <form on:submit|preventDefault={}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" bind:value={email} />
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            bind:value={password}
        />
    </form>
</div>

<style>

</style>