<script>
    import { login } from "./auth.mjs";
    import { userStore } from "./stores";
    let email = "";
    let password = "";
    async function handleLogin() {
        const user = await login(email, password);
        $userStore.isLoggedIn = true;
        $userStore.user = user.user;
        location.hash = "#quiz";
    }
</script>

<div>
    <h1>Create a Penguin</h1>
    <h2>Login Page</h2>
    <form on:submit|preventDefault={handleLogin}>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" bind:value={email} />
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            bind:value={password}
        />
        <button type="submit">Login</button>
        <p>
            Don't have an account? Make one now! <br /> <br />
            <a href="#signup" type="button">Create Account</a>
        </p>
    </form>
</div>

<style>
    a {
        border: 1px solid blueviolet;
        border-radius: 8px;
        background-color: darkblue;
        padding: 0.5em;
    }
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
