function startSciFiAdventure() {
    setGameText("Welcome to the Sci-Fi Adventure! You are aboard a spaceship navigating through the galaxy. Do you explore the nearby planet or continue your journey?");
    setGameChoices([
        { text: 'Explore the planet', action: explorePlanet },
        { text: 'Continue journey', action: continueJourney }
    ]);
}

function explorePlanet() {
    // Sci-Fi specific game logic
}

function continueJourney() {
    // Sci-Fi specific game logic
}

// Additional sci-fi specific functions
