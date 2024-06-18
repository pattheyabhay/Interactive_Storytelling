

function startFantasyAdventure() {
    setGameText("Welcome to the Fantasy Adventure! You are a brave adventurer in a mystical land. Do you explore the enchanted forest or venture into the ancient ruins?");
    setGameChoices([
        { text: 'Explore the enchanted forest', action: exploreForest },
        { text: 'Venture into the ancient ruins', action: exploreRuins }
    ]);
}


function exploreForest() {
    setGameText("You decide to explore the enchanted forest. As you wander through, you come across a magical glade with a sparkling spring and a hidden cave. Do you investigate the spring or enter the cave?");
    setGameChoices([
        { text: 'Investigate the spring', action: investigateSpring },
        { text: 'Enter the cave', action: enterCave }
    ]);
}

function exploreRuins() {
    setGameText("You decide to venture into the ancient ruins. Inside, you find crumbling statues and hidden passages. Do you examine the statues or explore the passages?");
    setGameChoices([
        { text: 'Examine the statues', action: examineStatues },
        { text: 'Explore the passages', action: explorePassages }
    ]);
}

// Additional functions for each choice path

function investigateSpring() {
    setGameText("You approach the magical spring and notice it has healing properties. As you drink from the spring, you feel rejuvenated. Suddenly, a fairy appears. Do you speak with the fairy or leave the glade?");
    setGameChoices([
        { text: 'Speak with the fairy', action: speakWithFairy },
        { text: 'Leave the glade', action: leaveGlade }
    ]);
}

function enterCave() {
    setGameText("You enter the hidden cave and find ancient runes on the walls. Deeper inside, you hear a dragon's growl. Do you decipher the runes or confront the dragon?");
    setGameChoices([
        { text: 'Decipher the runes', action: decipherRunes },
        { text: 'Confront the dragon', action: confrontDragon }
    ]);
}

function examineStatues() {
    setGameText("You examine the statues and find they are guardians of a hidden treasure. As you touch one, it comes to life. Do you fight the guardian or try to communicate with it?");
    setGameChoices([
        { text: 'Fight the guardian', action: fightGuardian },
        { text: 'Communicate with it', action: communicateWithGuardian }
    ]);
}

function explorePassages() {
    setGameText("You explore the hidden passages and discover a secret chamber with an ancient artifact. Do you take the artifact or leave it undisturbed?");
    setGameChoices([
        { text: 'Take the artifact', action: takeArtifact },
        { text: 'Leave it undisturbed', action: leaveArtifact }
    ]);
}

// Functions for further branching paths

function speakWithFairy() {
    setGameText("You speak with the fairy, who grants you a magical boon for your kindness. Do you accept the boon or ask for guidance instead?");
    setGameChoices([
        { text: 'Accept the boon', action: acceptBoon },
        { text: 'Ask for guidance', action: askForGuidance }
    ]);
}

function leaveGlade() {
    setGameText("You decide to leave the glade and continue your adventure. Soon, you encounter a band of goblins blocking your path. Do you fight the goblins or try to sneak past them?");
    setGameChoices([
        { text: 'Fight the goblins', action: fightGoblins },
        { text: 'Sneak past them', action: sneakPastGoblins }
    ]);
}

function decipherRunes() {
    setGameText("You decipher the runes and unlock a hidden power within you. This newfound power aids you in your future quests. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function confrontDragon() {
    setGameText("You bravely confront the dragon. After a fierce battle, you emerge victorious and claim its hoard of treasure. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function fightGuardian() {
    setGameText("You fight the guardian and, after a tough battle, defeat it. You claim the hidden treasure as your reward. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function communicateWithGuardian() {
    setGameText("You communicate with the guardian and it reveals secrets of the ruins to you. This knowledge greatly benefits your future quests. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function takeArtifact() {
    setGameText("You take the ancient artifact and discover its magical properties. This artifact will aid you in your future adventures. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function leaveArtifact() {
    setGameText("You decide to leave the artifact undisturbed, showing respect for the ancient culture. This decision earns you great respect in the mystical realms. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function acceptBoon() {
    setGameText("You accept the fairy's boon, gaining magical abilities that will aid you in your quests. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function askForGuidance() {
    setGameText("You ask the fairy for guidance, and she reveals the location of a hidden treasure. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function fightGoblins() {
    setGameText("You fight the goblins and, after a fierce battle, emerge victorious. Your bravery is known far and wide. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}

function sneakPastGoblins() {
    setGameText("You manage to sneak past the goblins undetected and continue on your journey. Your stealth and cunning are now legendary. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startFantasyAdventure }]);
}




function setGameChoices(choices) {
    const choicesContainer = document.getElementById('game-choices');
    choicesContainer.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = choice.action;
        choicesContainer.appendChild(button);
    });
}

// Start the adventure
