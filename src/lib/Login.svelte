<script>
    import { login } from "./auth.mjs";
    import { userStore } from "./stores";
    let username = "";
    let password = "";
    async function handleLogin() {
        const user = await login(username, password);
        $userStore.isLoggedIn = true;
        $userStore.user = user.user;
    }
</script>

<div>
    <h2>Login Page</h2>
    <form on:submit|preventDefault={handleLogin}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" bind:value={username}/>
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            bind:value={password}
        />
        <button type="submit">Login</button>
        <button type="button">Create Account</button>
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
