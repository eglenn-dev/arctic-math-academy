<script>
    import { signup } from "./auth.mjs";
    import { userStore } from "./stores";
    let email = "";
    let password = "";
    async function handleSignup() {
        const user = await signup(email, password);
        $userStore.isLoggedIn = true;
        $userStore.user = user.user;
        location.hash = "#quiz";
    }
</script>

<div>
    <h2>Create an account here!</h2>
    <form on:submit|preventDefault={handleSignup}>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" />
        <label for="email">Email</label>
        <input type="text" id="email" name="email" bind:value={email} />
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            bind:value={password}
        />
        <button type="submit">Create Account</button>
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
        position: relative;
        z-index: 100;
    }

    form input {
        height: 30px;
    }
</style>
