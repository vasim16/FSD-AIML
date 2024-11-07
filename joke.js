document.getElementById('getJoke').addEventListener('click', fetchJoke);
document.getElementById('clear').addEventListener('click', clearJoke);

function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            let joke;
            if (data.type === 'single') {
                joke = data.joke;
            } else {
                joke = `${data.setup} - ${data.delivery}`;
            }
            displayJoke(joke);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

function displayJoke(joke) {
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.textContent = joke;
    updateCharCount(joke);
}

function updateCharCount(joke) {
    const charCount = document.getElementById('charCount');
    charCount.textContent = `Character Count: ${joke.length}`;
}

function clearJoke() {
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.textContent = 'Click "Get Joke" to fetch a joke!';
    document.getElementById('charCount').textContent = 'Character Count: 0';
}