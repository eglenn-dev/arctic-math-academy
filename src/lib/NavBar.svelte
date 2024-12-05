<script>
    import { route } from "./stores";
</script>

<nav>
    <a href="#home" class={$route === "#home" ? "active" : ""}>Home</a>
    <a href="#posts" class={$route === "#posts" ? "active" : ""}>Posts</a>
    <a href="#login" class={$route === "#login" ? "active" : ""}>Login</a>
    <a href="#profile" class={$route === "#profile" ? "active" : ""}>Profile</a>
</nav>

<style>
    a,
    a:link,
    a:visited {
        color: rgb(62, 62, 62);
        text-decoration: none;
    }

    .active {
        
        border-bottom: 3px solid #fb8414;
    }
</style>
