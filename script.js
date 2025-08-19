// Define the texts as an array of strings
const allTexts = [
    "The ancient map, yellowed with age and frayed at the edges, lay on the table. It promised a treasure beyond imagination, hidden in a place only whispered about in old seafaring tales. With a compass in hand and a heart full of hope, the lone adventurer set off on a new quest, guided by the stars and the legends of the past. The journey was long and perilous, but the allure of the unknown kept them moving forward. Each step brought them closer to their destiny, a legacy waiting to be claimed.",
    "A gentle rain began to fall, pattering softly on the windowpane. The city lights blurred into streaks of color, creating a beautiful, melancholic painting. Inside, a book lay open, its pages filled with stories of distant lands and magical creatures. The soft glow of a lamp illuminated the room, casting dancing shadows on the walls. It was a perfect moment of quiet reflection, a sanctuary from the world outside, filled with peace and the simple joy of a good story.",
    "The old oak tree stood majestically in the meadow, its branches reaching towards the sky like gnarled fingers. It had witnessed countless seasons, its roots intertwined with the history of the land. Under its shade, children had played, lovers had met, and poets had found their inspiration. It was a silent witness to the passing of time, a symbol of endurance and resilience. Its leaves rustled in the wind, telling a story only the wise could hear, a timeless whisper of the earth's heartbeat.",
    "In a small, bustling bakery, the aroma of freshly baked bread and sweet pastries filled the air. A baker, with flour-dusted hands and a warm smile, worked tirelessly to create masterpieces of dough and sugar. Each loaf was crafted with care, a testament to a lifelong passion for the culinary arts. The warmth from the oven was a comforting presence, and the sound of kneading dough was a soothing rhythm. It was more than a job; it was a craft, a way to share a little bit of happiness with the world, one delicious bite at a time.",
    "The lighthouse on the cliff's edge blinked its beacon into the darkness, a steady pulse of hope for sailors lost at sea. Its light cut through the thick fog, guiding ships safely to shore. The waves crashed relentlessly against the rocks below, a constant roar that filled the night. Inside, the keeper watched over the vast, empty expanse of the ocean, a solitary guardian. The lighthouse was more than just a structure; it was a promise, a beacon of safety and a symbol of unwavering vigilance against the chaos of the sea, a silent hero in the night.",
    "The shimmering spectacle of the aurora borealis painted a celestial ballet across the arctic night sky, its vibrant green and purple curtains dancing to an unheard cosmic symphony. Below, the frozen tundra lay silent and still, blanketed in a pristine layer of snow that reflected the ethereal glow from above. A lone wolf's howl echoed in the distance, a hauntingly beautiful sound that was the only sign of life in the vast, desolate wilderness. This breathtaking display of nature's artistry was a reminder of the universe's immense and beautiful mysteries, a fleeting moment of awe-inspiring wonder.",
    "An ancient, sprawling library stood as a monument to human knowledge, its towering shelves packed with centuries of wisdom. The air was thick with the scent of aged paper and leather-bound books, a nostalgic perfume that spoke of countless stories waiting to be discovered. Sunlight filtered through stained-glass windows, illuminating dust motes dancing in the air like tiny stars. In this hallowed hall, every book held a different universe, a new perspective, and a chance to travel through time and space without ever leaving the comfortable embrace of a well-worn armchair. It was a true sanctuary for the curious mind.",
    "The dense, verdant rainforest pulsed with an energetic symphony of life. The chirping of unseen insects, the chatter of monkeys swinging through the canopy, and the calls of exotic birds created a complex chorus. Sunlight struggled to pierce the thick foliage, creating a mosaic of light and shadow on the forest floor. Giant ferns unfurled their delicate fronds, and vibrant orchids clung to the branches of towering trees. Every rustle of a leaf and every murmur of the wind was part of a larger, interconnected narrative, a wild and untamed world teeming with biodiversity and secrets yet to be uncovered.",
    "At the peak of a towering skyscraper, the city stretched out in a breathtaking panorama of light and motion. Streams of cars looked like flowing rivers of red and white, their headlights and taillights creating mesmerizing patterns. The glow from countless windows created a man-made constellation, a testament to the sleepless energy of urban life. The cool night air whispered past, carrying the distant hum of the metropolis below. From this vantage point, the city seemed both impossibly vast and intimately connected, a beautiful, sprawling testament to human ambition and resilience, a symphony of light and life.",
    "A weathered ship, its sails tattered but its spirit unbroken, cut through the churning silver waves of the open ocean. The salty spray misted the deck, and the wind sang a powerful song in the rigging. For weeks, the crew had been at the mercy of the sea, navigating by the constellations and the sheer force of will. The horizon was a constant line of blue, an endless promise of what lay beyond. They were not just sailing to a destination; they were on a pilgrimage to a new beginning, a journey of discovery and self-reliance, with the vast and unforgiving sea as their only companion and guide.",
    "In the quiet of a painter's studio, a masterpiece slowly came to life on a blank canvas. The artist's brush, a meticulous extension of their thoughts, applied layer after layer of vibrant color and texture. The air was filled with the faint scent of turpentine and oil paints, a familiar aroma of creation. With each stroke, a new detail emerged, a subtle expression, a hint of emotion. The world outside faded away, and the artist became one with their work, lost in the pure, unadulterated flow of creativity. It was a space of pure magic, where imagination took physical form.",
    "The vast, empty expanse of the desert was breathtakingly beautiful, its dunes sculpted by the wind into flowing, golden waves. The sun beat down with relentless intensity, but as it began its descent, the sky exploded in a riot of fiery reds, oranges, and purples. The silence was absolute, a profound stillness broken only by the whisper of sand. This stark, unforgiving landscape held a quiet majesty, a raw, elemental beauty that spoke of timelessness. It was a place where one could feel both insignificant and deeply connected to the planet's powerful, enduring spirit.",
    "A symphony orchestra filled the grand concert hall with a cascade of sound. The violins soared, the cellos rumbled, the woodwinds chirped, and the brass section bellowed with majestic force. The conductor, a silent maestro of motion, guided the musicians through the intricate score with a precise ballet of their hands. Each note was a thread, woven together to form a rich and complex tapestry of music that moved the soul. The sound washed over the audience, a transformative wave that transcending language, a perfect harmony of human emotion and technical skill.",
    "The futuristic cityscape hummed with the soft glow of neon lights and the silent motion of flying vehicles. Sleek, glass towers pierced the sky, their reflective surfaces mirroring the digital advertisements that flickered across their exteriors. Automated drones zipped through the air, delivering packages with robotic efficiency. Below, the bustling streets were a kaleidoscope of holographic projections and diverse cultures. It was a city of constant change and innovation, a playground of technology and design, where the line between the virtual and the real was increasingly blurred, a living testament to human ingenuity.",
    "A cozy cafe on a cobblestone street offered a warm escape from the chilly morning air. The rich scent of brewing coffee and baking pastries filled the space, a comforting embrace. Sunlight streamed through the large front window, illuminating the swirling steam from a cup of espresso. Patrons huddled with their books and laptops, lost in their own worlds, while soft jazz music played in the background. It was a small, perfect slice of life, a place where time seemed to slow down, and simple pleasures were elevated to an art form, a haven for quiet moments and good conversation."
];

// Time limits in seconds per level
const timeLimits = {
    slow: [45, 60, 75, 90, 105, 120, 135, 150, 165, 180], // 1 to 10 lines
    speed: [30, 45, 60, 75, 90, 105, 120, 135, 150, 165] // 1 to 10 lines
};

// DOM elements
const homePage = document.getElementById('home-page');
const levelPage = document.getElementById('level-page');
const gamePage = document.getElementById('game-page');
const startSlowBtn = document.getElementById('start-slow');
const startSpeedBtn = document.getElementById('start-speed');
const levelGrid = document.getElementById('level-grid');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const targetTextElement = document.getElementById('target-text');
const typingArea = document.getElementById('typing-area');
const wpmDisplay = document.getElementById('wpm-display');
const accuracyDisplay = document.getElementById('accuracy-display');
const timeDisplay = document.getElementById('time-display');
const levelDisplay = document.getElementById('level-display');
const appreciationModal = document.getElementById('appreciation-modal');
const modalText = document.getElementById('modal-text');
const nextLevelBtn = document.getElementById('next-level-btn');
const homeBtn = document.getElementById('home-btn');
const failModal = document.getElementById('fail-modal');
const retryBtn = document.getElementById('retry-btn');
const failHomeBtn = document.getElementById('fail-home-btn');
const newTextBtn = document.getElementById('new-text-btn');
const progressBar = document.getElementById('progress-bar');

// Game state variables
let currentText = '';
let startTime = null;
let timerInterval = null;
let typedCharactersCount = 0;
let correctCharactersCount = 0;
let totalTypedCharacters = 0;
let mode = 'slow';
let currentLevel = 1;
let currentTimeout = null;
let jsConfetti = null;

// Audio elements for sound effects
const correctSound = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_73147cfd21.mp3');
const wrongSound = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_f50d68f6a9.mp3');
const completionSound = new Audio('https://cdn.pixabay.com/audio/2022/01/24/audio_9242502621.mp3');

// Initialize particles.js once at the beginning
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ff914d" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
            "size": { "value": 5, "random": true, "anim": { "enable": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#f5f5f5", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
});

/**
 * Loads a random text for the specified mode and level.
 * @param {string} newMode - The mode to switch to ('slow' or 'speed').
 * @param {number} level - The current level (1-10).
 */
function loadText(newMode, level) {
    mode = newMode;
    currentLevel = level;
    
    // Select a random starting point in the text array
    const startingIndex = Math.floor(Math.random() * (allTexts.length - (level - 1)));
    
    // Concatenate lines based on the current level
    const linesToUse = allTexts.slice(startingIndex, startingIndex + level);
    currentText = linesToUse.join(' ');
    
    // Reset UI and state
    typingArea.value = '';
    typingArea.disabled = false;
    typingArea.focus();
    
    levelDisplay.textContent = `Level ${currentLevel}`;
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '0';
    timeDisplay.textContent = timeLimits[mode][currentLevel - 1];
    progressBar.style.width = '0%';
    
    typedCharactersCount = 0;
    correctCharactersCount = 0;
    totalTypedCharacters = 0;
    startTime = null;
    
    // Stop any existing timer or timeout
    clearInterval(timerInterval);
    clearTimeout(currentTimeout);

    // Display text with spans for styling
    targetTextElement.innerHTML = '';
    currentText.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        targetTextElement.appendChild(span);
    });

    // Set initial cursor position
    if (targetTextElement.children.length > 0) {
        targetTextElement.children[0].classList.add('current');
    }
}

/**
 * Starts the timer and time limit.
 */
function startTimer() {
    if (!startTime) {
        startTime = new Date().getTime();
        const timeLimit = timeLimits[mode][currentLevel - 1];

        // Start countdown timer
        timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
            const remainingTime = timeLimit - elapsedTime;
            timeDisplay.textContent = Math.max(0, remainingTime);
            
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                endGame(false);
            }
        }, 1000);

        // Update WPM and Accuracy every second
        const metricsInterval = setInterval(updateMetrics, 1000);
        
        currentTimeout = setTimeout(() => {
            clearInterval(metricsInterval);
        }, timeLimit * 1000 + 1000);
    }
}

/**
 * Updates the WPM and Accuracy displays, and the progress bar.
 */
function updateMetrics() {
    if (!startTime) return;

    const elapsedTime = (new Date().getTime() - startTime) / 1000 / 60;
    if (elapsedTime > 0) {
        const wpm = Math.round((correctCharactersCount / 5) / elapsedTime);
        wpmDisplay.textContent = wpm;
    }

    const accuracy = totalTypedCharacters > 0 
        ? Math.round((correctCharactersCount / totalTypedCharacters) * 100) 
        : 0;
    accuracyDisplay.textContent = accuracy;

    // Update progress bar
    const progress = (typedCharactersCount / currentText.length) * 100;
    progressBar.style.width = `${progress}%`;
}

/**
 * Handles user input and updates the UI based on typing correctness.
 */
function handleTyping(event) {
    if (!startTime) {
        startTimer();
    }

    const typedText = typingArea.value;
    const targetChars = targetTextElement.querySelectorAll('span');
    
    totalTypedCharacters = typedText.length;
    correctCharactersCount = 0;

    if (event.data) {
        const expectedChar = currentText[typedText.length - 1];
        if (event.data === expectedChar) {
            correctSound.currentTime = 0;
            correctSound.play();
        } else {
            wrongSound.currentTime = 0;
            wrongSound.play();
        }
    }

    targetChars.forEach((charSpan, index) => {
        const targetChar = currentText[index];
        const typedChar = typedText[index];
        
        charSpan.classList.remove('correct', 'incorrect', 'current');
        
        if (typedChar === undefined) {
            return;
        }

        if (typedChar === targetChar) {
            charSpan.classList.add('correct');
            correctCharactersCount++;
        } else {
            charSpan.classList.add('incorrect');
        }
    });

    typedCharactersCount = typedText.length;

    if (typedText.length < currentText.length) {
        targetChars[typedText.length].classList.add('current');
    }

    updateMetrics();

    if (typedText.length === currentText.length && correctCharactersCount === currentText.length) {
        endGame(true);
    }
}

/**
 * Ends the game, stops the timer, and displays the appropriate modal.
 * @param {boolean} success - True if the user completed the level successfully, false otherwise.
 */
function endGame(success) {
    clearInterval(timerInterval);
    clearTimeout(currentTimeout);
    typingArea.disabled = true;

    if (success) {
        completionSound.currentTime = 0;
        completionSound.play();
        if (!jsConfetti) {
            jsConfetti = new JSConfetti();
        }
        jsConfetti.addConfetti();

        if (currentLevel === 10) {
            modalText.textContent = `You've completed all levels! Your final WPM was ${wpmDisplay.textContent} and accuracy was ${accuracyDisplay.textContent}%.`;
            nextLevelBtn.style.display = 'none';
        } else {
            modalText.textContent = `You completed Level ${currentLevel}! Click 'Next Level' to continue.`;
            nextLevelBtn.style.display = 'inline-block';
        }
        appreciationModal.classList.add('visible');
    } else {
        failModal.classList.add('visible');
    }
}

/**
 * Generates the level buttons on the level selection page.
 */
function generateLevelButtons() {
    levelGrid.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('level-btn');
        button.addEventListener('click', () => {
            showGamePage(mode, i);
        });
        levelGrid.appendChild(button);
    }
}

/**
 * Handles the navigation to the level selection page.
 * @param {string} selectedMode - The mode chosen by the user ('slow' or 'speed').
 */
function showLevelSelection(selectedMode) {
    homePage.classList.remove('active');
    levelPage.classList.add('active');
    mode = selectedMode;
    generateLevelButtons();
}

/**
 * Handles the navigation to the game page.
 * @param {string} selectedMode - The mode to load ('slow' or 'speed').
 * @param {number} selectedLevel - The level to start.
 */
function showGamePage(selectedMode, selectedLevel) {
    levelPage.classList.remove('active');
    gamePage.classList.add('active');
    loadText(selectedMode, selectedLevel);
}

// Event listeners
startSlowBtn.addEventListener('click', () => showLevelSelection('slow'));
startSpeedBtn.addEventListener('click', () => showLevelSelection('speed'));

backToHomeBtn.addEventListener('click', () => {
    levelPage.classList.remove('active');
    homePage.classList.add('active');
});

newTextBtn.addEventListener('click', () => loadText(mode, currentLevel));

homeBtn.addEventListener('click', () => {
    appreciationModal.classList.remove('visible');
    gamePage.classList.remove('active');
    homePage.classList.add('active');
});

nextLevelBtn.addEventListener('click', () => {
    appreciationModal.classList.remove('visible');
    currentLevel++;
    if (currentLevel <= 10) {
        showGamePage(mode, currentLevel);
    }
});

retryBtn.addEventListener('click', () => {
    failModal.classList.remove('visible');
    loadText(mode, currentLevel);
});

failHomeBtn.addEventListener('click', () => {
    failModal.classList.remove('visible');
    gamePage.classList.remove('active');
    homePage.classList.add('active');
});

typingArea.addEventListener('input', handleTyping);