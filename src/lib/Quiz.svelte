<script>
    import { saveResponses } from "./dbModel.mjs";
    let difficulty = "Easy";
    let questions = [];
    let answers = [];
    let userAnswers = [];
    let score = 0;
    let showResults = false;

    const generateQuestions = () => {
        questions = [];
        answers = [];
        userAnswers = [];
        score = 0;
        showResults = false;

        let maxNum;
        switch (difficulty) {
            case "Easy":
                maxNum = 9;
                break;
            case "Medium":
                maxNum = 99;
                break;
            case "Hard":
                maxNum = 999;
                break;
        }

        for (let i = 0; i < 10; i++) {
            const num1 = Math.floor(Math.random() * maxNum) + 1;
            const num2 = Math.floor(Math.random() * maxNum) + 1;
            questions.push(`${num1} x ${num2} = ?`);
            answers.push(num1 * num2);
            userAnswers.push("");
        }
    };

    const handleSubmit = () => {
        score = 0;
        for (let i = 0; i < 10; i++) {
            if (parseInt(userAnswers[i]) === answers[i]) {
                score++;
            }
        }
        showResults = true;
        const response = {
            questions,
            userAnswers,
            answers,
        };
        saveResponses(response);
    };
</script>

<h1>Math Quiz</h1>
<div class="quiz">
<label for="difficulty">Difficulty:</label>
<select id="difficulty" bind:value={difficulty} on:change={generateQuestions}>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
</select>

<button on:click={generateQuestions}>Generate Questions</button>

{#if questions.length > 0}
    <form on:submit|preventDefault={handleSubmit}>
        {#each questions as question, index}
            <p>
                {index + 1}. {question}
                <input type="number" bind:value={userAnswers[index]} required />
            </p>
        {/each}

        <button type="submit">Submit Answers</button>
    </form>
{/if}

{#if showResults}
    <h2>Results</h2>
    <p>Your Score: {score} / 10</p>

    {#each questions as question, index}
        <p>
            {index + 1}. {question} Your Answer: {userAnswers[index]} Correct Answer:
            {answers[index]}
            {#if parseInt(userAnswers[index]) === answers[index]}
                <span style="color: green;">✓</span>
            {:else}
                <span style="color: red;">✗</span>
            {/if}
        </p>
    {/each}
{/if}
</div>
<style>
    .quiz{
        position: relative;
        z-index: 100;
    }
</style>
