function startSciFiAdventure() {
    setGameText("Welcome to the Sci-Fi Adventure! You are aboard a spaceship navigating through the galaxy. Do you explore the nearby planet or continue your journey?");
    setGameChoices([
        { text: 'Explore the planet', action: explorePlanet },
        { text: 'Continue journey', action: continueJourney }
    ]);
}

function explorePlanet() {
    setGameText("You decide to explore the nearby planet. As you land, you notice the planet's surface is covered with bioluminescent plants and alien structures. Do you investigate the structures or collect samples of the plants?");
    setGameChoices([
        { text: 'Investigate structures', action: investigateStructures },
        { text: 'Collect plant samples', action: collectPlantSamples }
    ]);
}

function continueJourney() {
    setGameText("You decide to continue your journey through the galaxy. Suddenly, your ship detects a distress signal from a nearby asteroid belt. Do you respond to the distress signal or avoid the asteroid belt?");
    setGameChoices([
        { text: 'Respond to distress signal', action: respondToSignal },
        { text: 'Avoid asteroid belt', action: avoidAsteroidBelt }
    ]);
}

// Additional functions for each choice path

function investigateStructures() {
    setGameText("You approach the alien structures and discover they are ruins of an ancient civilization. As you explore, you activate a hidden mechanism revealing a secret chamber. Do you enter the chamber or continue exploring the ruins?");
    setGameChoices([
        { text: 'Enter the chamber', action: enterChamber },
        { text: 'Continue exploring', action: continueExploringRuins }
    ]);
}

function collectPlantSamples() {
    setGameText("You start collecting samples of the bioluminescent plants. Suddenly, you notice a strange creature watching you from a distance. Do you approach the creature or continue collecting samples?");
    setGameChoices([
        { text: 'Approach the creature', action: approachCreature },
        { text: 'Continue collecting samples', action: continueCollectingSamples }
    ]);
}

function respondToSignal() {
    setGameText("You decide to respond to the distress signal. As you navigate through the asteroid belt, you find a damaged spaceship. Do you attempt to dock with the ship or scan it from a distance?");
    setGameChoices([
        { text: 'Dock with the ship', action: dockWithShip },
        { text: 'Scan from a distance', action: scanFromDistance }
    ]);
}

function avoidAsteroidBelt() {
    setGameText("You decide to avoid the asteroid belt and continue your journey. As you travel further, you encounter a massive space station. Do you dock with the station or bypass it?");
    setGameChoices([
        { text: 'Dock with the station', action: dockWithStation },
        { text: 'Bypass the station', action: bypassStation }
    ]);
}

// Functions for further branching paths

function enterChamber() {
    setGameText("You enter the secret chamber and find advanced technology and ancient artifacts. Do you take the artifacts or document your findings and leave them untouched?");
    setGameChoices([
        { text: 'Take the artifacts', action: takeArtifacts },
        { text: 'Document findings', action: documentFindings }
    ]);
}

function continueExploringRuins() {
    setGameText("You continue exploring the ruins and discover an alien terminal. It seems to be operational. Do you attempt to activate the terminal or leave it alone?");
    setGameChoices([
        { text: 'Activate the terminal', action: activateTerminal },
        { text: 'Leave it alone', action: leaveTerminal }
    ]);
}

function approachCreature() {
    setGameText("You approach the creature cautiously. It appears to be friendly and communicates with you telepathically. Do you try to understand its message or capture it for study?");
    setGameChoices([
        { text: 'Understand its message', action: understandMessage },
        { text: 'Capture it for study', action: captureCreature }
    ]);
}

function continueCollectingSamples() {
    setGameText("You continue collecting samples, but the creature becomes agitated and starts approaching you. Do you defend yourself or try to calm it down?");
    setGameChoices([
        { text: 'Defend yourself', action: defendYourself },
        { text: 'Calm it down', action: calmCreature }
    ]);
}

function dockWithShip() {
    setGameText("You successfully dock with the damaged ship. Inside, you find survivors who need assistance. Do you help them repair their ship or offer them transport to the nearest space station?");
    setGameChoices([
        { text: 'Help repair ship', action: helpRepairShip },
        { text: 'Offer transport', action: offerTransport }
    ]);
}

function scanFromDistance() {
    setGameText("You scan the damaged ship from a distance and discover it contains valuable cargo. Do you attempt to salvage the cargo or leave it and continue your journey?");
    setGameChoices([
        { text: 'Salvage the cargo', action: salvageCargo },
        { text: 'Continue journey', action: continueJourney }
    ]);
}

function dockWithStation() {
    setGameText("You dock with the massive space station and are greeted by its inhabitants. They offer you a trade: advanced technology for resources. Do you accept the trade or decline?");
    setGameChoices([
        { text: 'Accept the trade', action: acceptTrade },
        { text: 'Decline the trade', action: declineTrade }
    ]);
}

function bypassStation() {
    setGameText("You bypass the space station and continue your journey. Suddenly, your ship encounters an anomaly in space. Do you investigate the anomaly or navigate around it?");
    setGameChoices([
        { text: 'Investigate the anomaly', action: investigateAnomaly },
        { text: 'Navigate around it', action: navigateAroundAnomaly }
    ]);
}

// Continue with more functions for each choice path...

// Functions to handle the end of different paths

function takeArtifacts() {
    setGameText("You take the artifacts and return to your ship. The advanced technology helps you upgrade your ship, making future explorations easier. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function documentFindings() {
    setGameText("You document your findings and leave the artifacts untouched. This decision earns you respect in the scientific community. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function activateTerminal() {
    setGameText("You activate the terminal and unlock secrets of the ancient civilization. This knowledge greatly benefits humanity. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function leaveTerminal() {
    setGameText("You decide not to tamper with the alien technology. This cautious approach keeps you safe. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function understandMessage() {
    setGameText("You understand the creature's message and establish a friendly relationship with its species. This new alliance opens up many possibilities for future exploration. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function captureCreature() {
    setGameText("You capture the creature for study, but this act provokes its species, causing conflict. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function defendYourself() {
    setGameText("You defend yourself against the creature, but this act of violence haunts you. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function calmCreature() {
    setGameText("You manage to calm the creature, forming a peaceful bond. This act of compassion brings you great satisfaction. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function helpRepairShip() {
    setGameText("You help the survivors repair their ship, earning their gratitude and new allies. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function offerTransport() {
    setGameText("You offer transport to the survivors, ensuring their safety and gaining new friends. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function salvageCargo() {
    setGameText("You salvage the valuable cargo, boosting your resources for future missions. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function acceptTrade() {
    setGameText("You accept the trade, gaining advanced technology that enhances your ship. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function declineTrade() {
    setGameText("You decline the trade, maintaining your resources but missing out on potential advancements. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function investigateAnomaly() {
    setGameText("You decide to investigate the anomaly. As your ship approaches, the anomaly begins to distort space around you, revealing a hidden wormhole. Do you enter the wormhole or retreat?");
    setGameChoices([
        { text: 'Enter the wormhole', action: enterWormhole },
        { text: 'Retreat', action: retreat }
    ]);
}

function navigateAroundAnomaly() {
    setGameText("You decide to navigate around the anomaly. As you do, your ship's sensors pick up a derelict alien ship floating nearby. Do you board the derelict ship or continue on your path?");
    setGameChoices([
        { text: 'Board the derelict ship', action: boardDerelictShip },
        { text: 'Continue on path', action: continueOnPath }
    ]);
}

// Further branching paths and outcomes

function enterWormhole() {
    setGameText("You enter the wormhole and find yourself in an unexplored region of space filled with wonders and dangers. Your journey has just begun. Do you explore the new region or try to find a way back?");
    setGameChoices([
        { text: 'Explore the new region', action: exploreNewRegion },
        { text: 'Find a way back', action: findWayBack }
    ]);
}

function retreat() {
    setGameText("You decide to retreat from the anomaly. As you return to safer space, you receive a message from another exploration vessel seeking assistance. Do you respond to the vessel or ignore the message?");
    setGameChoices([
        { text: 'Respond to the vessel', action: respondToVessel },
        { text: 'Ignore the message', action: ignoreMessage }
    ]);
}

function boardDerelictShip() {
    setGameText("You board the derelict alien ship and discover it contains advanced technology and an ominous warning. Do you investigate the ship further or take the technology and leave?");
    setGameChoices([
        { text: 'Investigate further', action: investigateFurther },
        { text: 'Take the technology and leave', action: takeTechnologyAndLeave }
    ]);
}

function continueOnPath() {
    setGameText("You decide to continue on your path, leaving the derelict ship behind. Your journey is uneventful until you encounter a mysterious space station. Do you dock at the station or bypass it?");
    setGameChoices([
        { text: 'Dock at the station', action: dockAtStation },
        { text: 'Bypass the station', action: bypassStation }
    ]);
}

// Additional ending functions

function exploreNewRegion() {
    setGameText("You decide to explore the new region of space, encountering strange planets and civilizations. Your journey is filled with discovery and adventure. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function findWayBack() {
    setGameText("You attempt to find a way back through the wormhole. After much effort, you return to familiar space, but with new knowledge and experiences. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function respondToVessel() {
    setGameText("You respond to the other exploration vessel and assist them with their mission. This act of cooperation leads to a strong alliance. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function ignoreMessage() {
    setGameText("You ignore the distress message and continue your journey. However, this decision weighs heavily on you. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function investigateFurther() {
    setGameText("You investigate the derelict ship further and uncover secrets that could change the fate of your mission. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function takeTechnologyAndLeave() {
    setGameText("You take the advanced technology and leave the derelict ship. This technology significantly enhances your ship's capabilities. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function dockAtStation() {
    setGameText("You dock at the mysterious space station and are greeted by its inhabitants, who offer you a trade. This trade benefits your mission greatly. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

function bypassStation() {
    setGameText("You bypass the space station and continue your journey. As you venture further into space, you feel a sense of pride in your decision. You have completed this part of your adventure!");
    setGameChoices([{ text: 'Restart', action: startSciFiAdventure }]);
}

// Function to set game text and choices



// Start the adventure
startSciFiAdventure();

