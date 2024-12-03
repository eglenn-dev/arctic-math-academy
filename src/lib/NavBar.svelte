<script>
    import { route } from "./stores";
</script>

<nav>
    <a href="#home" class={$route === "#home" ? "active" : ""}>Home</a>
    <a href="#posts" class={$route === "#posts" ? "active" : ""}>Posts</a>
    <a href="#login" class={$route === "#login" ? "active" : ""}>Login</a>
    <a href="#profile" class={$route === "#profile" ? "active" : ""}>Profile</a>
    <a href="#quiz" class={$route === "#quiz" ? "active" : ""}>Quiz</a>
</nav>

<style>
    a:link,
    a:visited {
        color: white;
        text-decoration: none;
    }

    .active {
        border-bottom: 1px solid gold;
    }
</style>
