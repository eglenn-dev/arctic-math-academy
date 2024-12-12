<script>
    import Home from "./lib/Home.svelte";
    import Login from "./lib/Login.svelte";
    import NavBar from "./lib/NavBar.svelte";
    import Post from "./lib/Post.svelte";
    import Quiz from "./lib/Quiz.svelte";
    import Profile from "./lib/Profile.svelte";
    import SignUp from "./lib/SignUp.svelte";
    import { route } from "./lib/stores";
    import { userStore } from "./lib/stores";
    import { checkLogin } from "./lib/auth.mjs";
    import { onMount } from "svelte";

    let params = {};

    window.addEventListener("popstate", (e) => {
        const protectedPages = ["#posts", "#profile", "#quiz"];
        const [hash, parts] = location.hash.split("?");
        params = new URLSearchParams(parts);
        if (protectedPages.includes(hash) && !$userStore.isLoggedIn) {
            location.hash = "#login";
        } else {
            route.set(hash);
        }
    });

    onMount(() => {
        const [hash, parts] = location.hash.split("?");
        params = new URLSearchParams(parts);
        if (hash === "#posts" && !$userStore.isLoggedIn) {
            location.hash = "#login";
        } else {
            route.set(hash);
        }
        checkLogin();
    });
</script>

<main>
    <NavBar />

    <div class="card">
        {#if $route === "#home" || $route === ""}
            <Home />
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
    main {
        background-color: #a4d4e6;
        background-image: linear-gradient(
                to bottom,
                #f8f9fa 30%,
                transparent 30%
            ),
            linear-gradient(
                to bottom,
                transparent 30%,
                #f8f9fa 30%,
                transparent 70%
            );
        background-repeat: repeat-x;
        background-size: 30px 180px;
        border-radius: 25px;
    }

    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Playfair+Display:wght@400;700&display=swap");

    p {
        font-family: "Open Sans", sans-serif;
    }

    h1,
    h2,
    h3 {
        font-family: "Playfair Display", serif; /* Apply Playfair Display to all headings */
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0.5em 0;
    }
</style>
