<script>
    import { onMount } from "svelte";
    import { getResponses } from "./dbModel.mjs";
    import { userStore } from "./stores";

    let username = "";
    let responses = [];
    let mostRecentResponse = null;
    let loading = true;
    let error = null;

    onMount(async () => {
        try {
            const email = $userStore?.user?.email;
            if (!email) return;
            username = email.split("@")[0];
            const data = await getResponses();
            console.log("Data from database:", data);
            if (data) {
                responses = data
                    .map((entry) => {
                        try {
                            const response = JSON.parse(entry.response);
                            let numCorrect = 0;
                            if (
                                response?.answers?.length &&
                                response?.userAnswers?.length &&
                                response?.questions?.length
                            ) {
                                for (
                                    let i = 0;
                                    i < response.answers.length;
                                    i++
                                ) {
                                    if (
                                        response.answers[i] ===
                                        response.userAnswers[i]
                                    ) {
                                        numCorrect++;
                                    }
                                }
                                response.score =
                                    (numCorrect / response.answers.length) *
                                    100;
                                return response;
                            } else {
                                console.error(
                                    "Invalid response structure:",
                                    response
                                );
                                return null;
                            }
                        } catch (e) {
                            console.error("Error parsing JSON", e);
                            return null;
                        }
                    })
                    .filter(Boolean);
                console.log("Processed responses:", responses);
                mostRecentResponse = responses[responses.length - 1];
            } else {
                error = "No data returned from the database.";
            }
        } catch (e) {
            error = "An error occurred while fetching data.";
            console.error("Error during fetch or processing", e);
        } finally {
            loading = false;
        }
    });
</script>

<h1>Hello, {username}</h1>

<div>
    <h2>Most Recent Test Results</h2>
    {#if mostRecentResponse?.questions}
        {#each mostRecentResponse.questions as question, index}
            <p>
                {index + 1}. {question} You: {mostRecentResponse?.userAnswers[
                    index
                ]}
                <strong>Correct: {mostRecentResponse?.answers[index]}</strong>
                {#if parseInt(mostRecentResponse.userAnswers[index]) === parseInt(mostRecentResponse.answers[index])}
                    <span style="color: green;">✓</span>
                {:else}
                    <span style="color: red;">✗</span>
                {/if}
            </p>
        {/each}
    {:else if loading}
        <p>Loading...</p>
    {:else if error}
        <p>Error: {error}</p>
    {:else}
        <p>No recent test results available.</p>
    {/if}
</div>

<div>
    <h2>History</h2>
    {#if loading}
        <p>Loading...</p>
    {:else if error}
        <p>Error: {error}</p>
    {:else if responses.length > 0}
        <ul>
            {#each responses as response}
                <li>{response?.score}%</li>
            {/each}
        </ul>
    {:else}
        <p>No responses available.</p>
    {/if}
</div>

<style>
    .info-card {
        display: flex;
        flex-direction: row;
        border: 9px solid #f3f3f3;
        border-radius: 10px;
        padding: 1.5rem;
        background-color: rgba(0, 0, 255, 0.1);
    }

    ul {
        display: flex;
        flex-direction: column-reverse;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
