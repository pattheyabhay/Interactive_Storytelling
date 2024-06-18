


//******************************************************* */

document.addEventListener('DOMContentLoaded', (event) => {
    setGameText("Choose your adventure genre to start the game.");
    document.body.style.backgroundImage = "url(main.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
});

function chooseGenre(genre) {
    let backgroundUrl;
    let initialText;
    let scriptPath;
    let cssPath;

    switch (genre) {
        case 'sci-fi':
            backgroundUrl = 'sci-fi.jpg';
            scriptPath = './js/sci-fi.js';
            cssPath = './css/sci-fi.css';
            initialText = "Welcome to the Sci-Fi Adventure! You are aboard a spaceship navigating through the galaxy. Do you explore the nearby planet or continue your journey?";
            break;
        case 'fantasy':
            backgroundUrl = 'quest.jpg';
            scriptPath = './js/fantasy.js';
            cssPath = './css/fantasy.css';
            initialText = "Welcome to the Fantasy Adventure! You find yourself in an enchanted forest. Do you explore the ancient ruins or follow the mystical river?";
            break;
        case 'mystery':
            backgroundUrl = 'mystery.jpg';
            scriptPath = './js/mystery.js';
            cssPath = './css/mystery.css';
            initialText = "Welcome to the Mystery Adventure! You are in a foggy town with secrets to uncover. Do you investigate the old mansion or visit the eerie graveyard?";
            break;
        default:
            backgroundUrl = '';
            initialText = '';
            scriptPath = '';
            cssPath = '';
    }

    document.body.style.backgroundImage = `url(${backgroundUrl})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';

    document.getElementById('game-heading').innerText = genre.charAt(0).toUpperCase() + genre.slice(1) + " Adventure";
    setGameText(initialText);
    

    if (cssPath) {
        loadCSS(cssPath);
    }

    if (scriptPath) {
        loadScript(scriptPath, () => {
            switch (genre) {
                case 'sci-fi':
                    startSciFiAdventure();
                    break;
                case 'fantasy':
                    startFantasyAdventure();
                    break;
                case 'mystery':
                    startMysteryAdventure();
                    break;
            }
        });
    }
}

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

function setGameText(text) {
    document.getElementById('game-text').innerText = text;
}



// function setGameChoices(choices) {
//     const choicesContainer = document.getElementById('game-choices');
//     choicesContainer.innerHTML = '';
//     choices.forEach(choice => {
//         const button = document.createElement('button');
//         button.innerText = choice.text;
//         button.onclick = choice.action; 
//         choicesContainer.appendChild(button);
//         button.display.style = none;
//     });
// }
// function refreshFunction(){
//     window.location.reload;
// }
