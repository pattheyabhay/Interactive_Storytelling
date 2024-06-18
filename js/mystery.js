function startMysteryAdventure() {
    setGameText("Welcome to the Murder Mystery! You are a detective called to a mansion where a murder has occurred. Do you investigate the crime scene or interview the suspects?");
    setGameChoices([
        { text: 'Investigate the crime scene', action: investigateCrimeScene },
        { text: 'Interview the suspects', action: interviewSuspects }
    ]);
}

function investigateCrimeScene() {
    setGameText("You start investigating the crime scene. You notice a bloodstain on the carpet and a broken vase. Do you examine the bloodstain or the vase?");
    setGameChoices([
        { text: 'Examine the bloodstain', action: examineBloodstain },
        { text: 'Examine the vase', action: examineVase }
    ]);
}

function interviewSuspects() {
    setGameText("You decide to interview the suspects. There are three: the butler, the maid, and the victim's spouse. Who do you interview first?");
    setGameChoices([
        { text: 'Interview the butler', action: interviewButler },
        { text: 'Interview the maid', action: interviewMaid },
        { text: 'Interview the spouse', action: interviewSpouse }
    ]);
}

// Additional functions for each choice path

function examineBloodstain() {
    setGameText("You examine the bloodstain and find a partial footprint. Do you take a sample for analysis or try to match the footprint?");
    setGameChoices([
        { text: 'Take a sample', action: takeSample },
        { text: 'Match the footprint', action: matchFootprint }
    ]);
}

function examineVase() {
    setGameText("You examine the broken vase and find a hidden note inside. Do you read the note or dust the vase for fingerprints?");
    setGameChoices([
        { text: 'Read the note', action: readNote },
        { text: 'Dust for fingerprints', action: dustForFingerprints }
    ]);
}

function interviewButler() {
    setGameText("You interview the butler. He seems nervous and mentions he saw someone leaving the scene. Do you press him for more details or move on to the next suspect?");
    setGameChoices([
        { text: 'Press for details', action: pressButler },
        { text: 'Move to next suspect', action: interviewMaid }
    ]);
}

function interviewMaid() {
    setGameText("You interview the maid. She seems calm but mentions hearing a loud noise. Do you ask her more about the noise or move on to the next suspect?");
    setGameChoices([
        { text: 'Ask about the noise', action: askMaid },
        { text: 'Move to next suspect', action: interviewSpouse }
    ]);
}

function interviewSpouse() {
    setGameText("You interview the victim's spouse. They seem distraught and claim to have been with the victim. Do you believe them or press for more information?");
    setGameChoices([
        { text: 'Believe them', action: believeSpouse },
        { text: 'Press for information', action: pressSpouse }
    ]);
}

// Functions for further branching paths

function takeSample() {
    setGameText("You take a sample of the bloodstain for analysis. The lab results come back with a match to the butler. Do you confront the butler or investigate further?");
    setGameChoices([
        { text: 'Confront the butler', action: confrontButler },
        { text: 'Investigate further', action: investigateFurther }
    ]);
}

function matchFootprint() {
    setGameText("You try to match the footprint and find it matches the maid's shoes. Do you confront the maid or investigate further?");
    setGameChoices([
        { text: 'Confront the maid', action: confrontMaid },
        { text: 'Investigate further', action: investigateFurther }
    ]);
}

function readNote() {
    setGameText("You read the note and find it is a threatening message to the victim. Do you trace the source of the note or keep it as evidence?");
    setGameChoices([
        { text: 'Trace the source', action: traceSource },
        { text: 'Keep as evidence', action: keepEvidence }
    ]);
}

function dustForFingerprints() {
    setGameText("You dust the vase for fingerprints and find a match to the victim's spouse. Do you confront the spouse or investigate further?");
    setGameChoices([
        { text: 'Confront the spouse', action: confrontSpouse },
        { text: 'Investigate further', action: investigateFurther }
    ]);
}

function pressButler() {
    setGameText("You press the butler for more details and he confesses to seeing the maid near the crime scene. Do you confront the maid or investigate further?");
    setGameChoices([
        { text: 'Confront the maid', action: confrontMaid },
        { text: 'Investigate further', action: investigateFurther }
    ]);
}

function askMaid() {
    setGameText("You ask the maid about the noise and she mentions it came from the victim's room. Do you investigate the victim's room or interview the spouse?");
    setGameChoices([
        { text: 'Investigate the room', action: investigateRoom },
        { text: 'Interview the spouse', action: interviewSpouse }
    ]);
}

function believeSpouse() {
    setGameText("You believe the spouse and they provide an alibi. Do you check the alibi or interview the maid?");
    setGameChoices([
        { text: 'Check the alibi', action: checkAlibi },
        { text: 'Interview the maid', action: interviewMaid }
    ]);
}

function pressSpouse() {
    setGameText("You press the spouse for more information and they reveal a hidden conflict with the victim. Do you investigate the conflict or check the alibi?");
    setGameChoices([
        { text: 'Investigate the conflict', action: investigateConflict },
        { text: 'Check the alibi', action: checkAlibi }
    ]);
}

// Continue with more functions for each choice path...

// Functions to handle the end of different paths

function confrontButler() {
    setGameText("You confront the butler with the lab results. He confesses to the crime in a moment of panic. The case is solved!");
    setGameChoices([{ text: 'Restart', action: startMurderMystery }]);
}

function investigateFurther() {
    setGameText("You decide to investigate further and uncover new evidence pointing to the maid. Do you confront the maid or continue investigating?");
    setGameChoices([
        { text: 'Confront the maid', action: confrontMaid },
        { text: 'Continue investigating', action: continueInvestigating }
    ]);
}

function confrontMaid() {
    setGameText("You confront the maid with the evidence. She breaks down and confesses to the crime. The case is solved!");
    setGameChoices([{ text: 'Restart', action: startMurderMystery }]);
}

function traceSource() {
    setGameText("You trace the source of the note and find it leads to a mysterious figure connected to the victim. Do you investigate this figure or keep the evidence?");
    setGameChoices([
        { text: 'Investigate the figure', action: investigateFigure },
        { text: 'Keep the evidence', action: keepEvidence }
    ]);
}

function keepEvidence() {
    setGameText("You decide to keep the note as evidence. Further analysis reveals fingerprints of the victim's spouse. Do you confront the spouse or investigate further?");
    setGameChoices([
        { text: 'Confront the spouse', action: confrontSpouse },
        { text: 'Investigate further', action: investigateFurther }
    ]);
}

function confrontSpouse() {
    setGameText("You confront the spouse with the evidence. They admit to the crime, revealing a hidden motive. The case is solved!");
    setGameChoices([{ text: 'Restart', action: startMurderMystery }]);
}

function investigateRoom() {
    setGameText("You investigate the victim's room and find a hidden safe. Do you try to open the safe or search the room for clues?");
    setGameChoices([
        { text: 'Open the safe', action: openSafe },
        { text: 'Search the room', action: searchRoom }
    ]);
}

function checkAlibi() {
    setGameText("You check the spouse's alibi and find it holds up. Do you investigate the maid or the butler?");
    setGameChoices([
        { text: 'Investigate the maid', action: investigateMaid },
        { text: 'Investigate the butler', action: investigateButler }
    ]);
}

function investigateConflict() {
    setGameText("You investigate the conflict and find it was over a significant inheritance. Do you dig deeper into the inheritance or interview other suspects?");
    setGameChoices([
        { text: 'Dig deeper', action: digDeeper },
        { text: 'Interview other suspects', action: interviewSuspects }
    ]);
}

// Additional ending functions

function continueInvestigating() {
    setGameText("You continue investigating and uncover a complex web of lies and deceit. The case takes longer to solve, but you gather enough evidence to bring the culprit to justice. The case is solved!");
    setGameChoices([{ text: 'Restart', action: startMurderMystery }]);
}

function investigateFigure() {
    setGameText("You investigate the mysterious figure and discover they are an old enemy of the victim. This new lead helps you solve the case. The case is solved!");
    setGameChoices([{ text: 'Restart', action: startMurderMystery }]);
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
startMysteryAdventure();
