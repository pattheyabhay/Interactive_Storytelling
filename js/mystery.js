function startMysteryAdventure() {
    setGameText("Welcome to the Mystery Adventure! You are in a foggy town with secrets to uncover. Do you investigate the old mansion or visit the eerie graveyard?");
    setGameChoices([
        { text: 'Investigate mansion', action: investigateMansion },
        { text: 'Visit graveyard', action: visitGraveyard }
    ]);
}

function investigateMansion() {
    // Mystery specific game logic
}

function visitGraveyard() {
    // Mystery specific game logic
}

// Additional mystery specific functions
