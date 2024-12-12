<script>
    import { userStore } from "./stores";

    const quotes = [
        "Mathematics is the music of reason. - James Joseph Sylvester",
        "The only way to learn mathematics is to do mathematics. - Paul Halmos",
        "Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein",
        "Without mathematics, there's nothing you can do. - Shakuntala Devi",
        "Mathematics is the art of giving the same name to different things. - Henri Poincaré"
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

<style>

/* Mascot container styling */
.mascot-container {
  display: flex; 
  align-items: center; 
  gap: 10px; 
}

.mascot-image {
  width: 35%; 
  border-radius: 50%;
  height: auto; 
  border: #FFC83D 30px solid; /* Beak Gold border */
}

.mascot-text {
  font-size: 16px; 
  color: #333; 
  margin: 0; 
}

/* Login button styling */
.login button, 
.login a {
  background-color: #FFC83D; /* Beak Gold */
  color: #2E2E2E; /* Penguin Black */
  border: none; 
  border-radius: 5px; 
  padding: 10px 20px; 
  font-size: 16px; 
  cursor: pointer; 
  text-decoration: none;
  display: inline-block; 
  transition: background-color 0.3s ease; 
}

.login button:hover, 
.login a:hover {
  background-color: #2E2E2E; /* Penguin Black */
  color: #FFC83D; /* Beak Gold */
}

/* Inspirational quote container */
.quote-container {
  margin: 20px auto;
  padding: 40px;
  background-color: #A4D4E6; /* Frosty Blue */
  border-radius: 15px;
  border: 10px solid #FFC83D; /* Snow Drift Gray */
  max-width: 600px;
  font-style: italic;
  color: #2E2E2E; /* Penguin Black */
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
  0%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
}
</style>

<h1>Welcome to the Arctic Math Academy!</h1>

<div class="mascot-container">
  <!-- Penguin Image -->
  <img src="/images/penguin.jpeg" alt="A Penguin Named Digit" class="mascot-image" />

  <!-- Display User Information Based on Login Status -->
  {#if $userStore.isLoggedIn}
    <div class="mascot-text">
      <h2>Hello {$userStore.user.username}!</h2>
      <p>You're currently logged in. Let’s waddle into some numbers!</p>
      
      <div class="login">
        <button on:click={() => { $userStore.isLoggedIn = false; }}>Log Out</button>
      </div>

      <p>add in a leaderboard</p>

    </div>
  {:else}
    <div class="mascot-text">
      <h2>Hi! I'm Digit! Welcome to our game, new friend!!</h2>
      <p>Please log in to explore more.</p>
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

