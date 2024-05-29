function startFantasyAdventure() {
    setGameText("Welcome to the Fantasy Adventure! You find yourself in an enchanted forest. Do you explore the ancient ruins or follow the mystical river?");
    setGameChoices([
        { text: 'Explore the ruins', action: exploreRuins },
        { text: 'Follow the river', action: followRiver }
    ]);
}

function exploreRuins() {
    // Fantasy specific game logic
}

function followRiver() {
    // Fantasy specific game logic
}

// Additional fantasy specific functions
