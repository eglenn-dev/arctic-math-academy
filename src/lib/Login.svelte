<script>
    let username = "";
    let password = "";
    function handleLogin() {
        const cred = { username, password };
        console.log(cred);
    }
</script>

<div>
    <h2>Login Page</h2>
    <form on:submit|preventDefault={handleLogin}>
        <label for="username">Username</label>
        <input
            type="text"
            id="username"
            name="username"
            bind:value={username}
        />
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            bind:value={password}
        />
        <button type="submit">Login</button>
        <button type="button">Signup</button>
    </form>
</div>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 20em;
        justify-content: center;
        margin: 0 auto;
    }

    form input {
        height: 30px;
    }
</style>
