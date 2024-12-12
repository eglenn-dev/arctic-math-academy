<script>
    import { userStore } from "./stores";
    import { logout } from "./auth.mjs";
    const quotes = [
        "Mathematics is the music of reason. - James Joseph Sylvester",
        "Failure is delay, not defeat. It is a temporary detour, not a dead end. – Denis Waitley",
        "The only way to learn mathematics is to do mathematics. - Paul Halmos",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. – Ralph Waldo Emerson.",
        "Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein",
        "The only real mistake is the one from which we learn nothing. – Henry Ford",
        "Without mathematics, there's nothing you can do. - Shakuntala Devi",
        "Mathematics is the art of giving the same name to different things. - Henri Poincaré",
    ];

    let currentQuoteIndex = 0;
    let currentQuote = quotes[currentQuoteIndex];

    // Function to cycle through quotes
    const changeQuote = () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        currentQuote = quotes[currentQuoteIndex];
    };

    // Change the quote every 45 seconds
    setInterval(changeQuote, 45000);
</script>

<h1>Welcome to the Arctic Math Academy!</h1>

<div class="mascot-container">
    <!-- Penguin Image -->
    <img
        src="/images/penguin.jpeg"
        alt="A Penguin Named Digit"
        class="mascot-image"
    />

    <!-- Display User Information Based on Login Status -->
    {#if $userStore.isLoggedIn}
        <div class="mascot-text">
            <h2>Hello {$userStore.user.email.split("@")[0]}!</h2>
            <p>You're currently logged in! Let’s waddle into some numbers!</p>

            <div class="login">
                <button
                    on:click={() => {
                        logout();
                    }}>Log Out</button
                >
                <a href="#quiz" type="button">Lets Play!</a>
            </div>
        </div>
    {:else}
        <div class="mascot-text">
            <h2>Hi! I'm Digit! Welcome to our game, new friend!!</h2>
            <p>If you want to explore more, click below!</p>
            <div class="login">
                <a href="#login" type="button">Go to Login</a>
            </div>
            <!-- Inspirational Quotes Section -->
            <div class="quote-container">
                <p>{currentQuote}</p>
            </div>
        </div>
    {/if}
</div>

<style>
    
    p {
        font-family: "Open Sans", sans-serif;
    }

    h1,
    h2
     {
        font-family: "Playfair Display", serif; /* Apply Playfair Display to all headings */
    }

    /* Mascot container styling */
    .mascot-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
    }

    .mascot-image {
        width: 35%;
        border-radius: 50%;
        height: auto;
        border: #ffc83d 30px solid; /* Beak Gold border */
       
    }

    .mascot-text {
        font-size: 16px;
        color: #333;
        margin: 0;
    }

    /* Login button styling */
    .login button,
    .login a {
        background-color: #ffc83d; /* Beak Gold */
        color: #2e2e2e; /* Penguin Black */
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        transition: background-color 0.3s ease;
        position: relative;
        z-index: 100;
       
    }

    .login button:hover,
    .login a:hover {
        background-color: #2e2e2e; /* Penguin Black */
        color: #ffc83d; /* Beak Gold */
    }

    /* Inspirational quote container */
    .quote-container {
        margin: 20px auto;
        padding: 40px;
        background-color: #a4d4e6; /* Frosty Blue */
        border-radius: 15px;
        border: 10px solid #ffc83d; /* Snow Drift Gray */
        max-width: 600px;
        font-style: italic;
        color: #2e2e2e; /* Penguin Black */
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .quote-container p {
        font-size: 18px;
        margin: 0;
        opacity: 1;
        animation: fade-in-out 5s infinite;
    }

    /* Make Quotes Change Animation */
    @keyframes fade-in-out {
        0%,
        100% {
            opacity: 0;
        }
        25%,
        75% {
            opacity: 1;
        }
    }
@media (min-width: 800px) {
        .mascot-container {
            flex-direction: row;
        }
    }
</style>
