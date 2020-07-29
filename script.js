const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const text = document.getElementById('text');


// Passing our joke to VOICERSS API

function tellMeAJoke(joke) {
    VoiceRSS.speech({
        key: 'a9ebfaf65fd84aedaf4c64fee8dcf6d1',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get jokes from Jokes API

async function getJokesFromJokesApi() {
    let joke = '';
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming,Dark?blacklistFlags=religious,political,racist,sexist';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        tellMeAJoke(joke);
        text.innerText = joke;
    } catch(error) {
    // Catch erros
        console.log('Whoops, ', error);
    }
}

// Event listener

button.addEventListener('click', getJokesFromJokesApi);