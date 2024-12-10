<script>
    import Login from "./lib/Login.svelte";
    import NavBar from "./lib/NavBar.svelte";
    import Post from "./lib/Post.svelte";
    import Quiz from "./lib/Quiz.svelte";
    import Profile from "./lib/Profile.svelte";
    import SignUp from "./lib/SignUp.svelte";
    import { route } from "./lib/stores";
    import { userStore } from "./lib/stores";

    let params = {};

    document.addEventListener("DOMContentLoaded", () => {
        const [hash, parts] = location.hash.split("?");
        params = new URLSearchParams(parts);
        if (hash === "#posts" && !$userStore.isLoggedIn) {
            location.hash = "#login";
        } else {
            route.set(hash);
        }
    });

    window.addEventListener("popstate", (e) => {
        const [hash, parts] = location.hash.split("?");
        params = new URLSearchParams(parts);
        if (hash === "#posts" && !$userStore.isLoggedIn) {
            location.hash = "#login";
        } else {
            route.set(hash);
        }
    });
</script>

<main>
    <NavBar />
    

    <div class="card">
        {#if $route === "#home" || $route === ""}
            <div>Home page</div>
        {:else if $route === "#posts"}
            <h2>Posts</h2>
            <ul>
                <li><a href="#post?post_id=1">Post One</a></li>
                <li><a href="#post?post_id=2">Post Two</a></li>
                <li><a href="#post?post_id=3">Post Three</a></li>
            </ul>
        {:else if $route === "#post"}
            <Post {params} />
        {:else if $route === "#login"}
            <Login />
        {:else if $route === "#signup"}
            <SignUp />
        {:else if $route === "#quiz"}
            <Quiz />
        {:else if $route === "#profile"}
            <Profile />
        {:else}
            <div>404 Not Found: {$route}</div>
        {/if}
    </div>
</main>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0.5em 0;
    }
</style>
