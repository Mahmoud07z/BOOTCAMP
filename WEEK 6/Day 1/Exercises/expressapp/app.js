const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Emoji database
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🦄', name: 'Unicorn' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🏀', name: 'Basketball' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '📱', name: 'Mobile Phone' },
    { emoji: '⌚', name: 'Watch' },
    { emoji: '☕', name: 'Coffee' },
    { emoji: '📚', name: 'Books' },
    { emoji: '🎮', name: 'Video Game' }
];

// Game state
let currentEmoji = null;
let options = [];
let score = 0;
let leaderboard = [];

// Helper function to get random emoji and options
function getNewEmoji() {
    // Get random emoji
    const randomIndex = Math.floor(Math.random() * emojis.length);
    currentEmoji = emojis[randomIndex];
    
    // Get 3 incorrect options
    const incorrectOptions = emojis
        .filter(e => e.name !== currentEmoji.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(e => e.name);
    
    // Combine with correct option and shuffle
    options = [currentEmoji.name, ...incorrectOptions]
        .sort(() => 0.5 - Math.random());
    
    return {
        emoji: currentEmoji.emoji,
        options: options
    };
}

// Routes
app.get('/api/emoji', (req, res) => {
    res.json(getNewEmoji());
});

app.post('/api/guess', (req, res) => {
    const { guess } = req.body;
    const isCorrect = guess === currentEmoji.name;
    
    if (isCorrect) {
        score++;
    }
    
    res.json({
        correct: isCorrect,
        correctAnswer: currentEmoji.name,
        score: score
    });
});

app.post('/api/submit-score', (req, res) => {
    const { playerName } = req.body;
    leaderboard.push({ name: playerName, score: score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10); // Keep top 10
    score = 0; // Reset score
    res.json({ leaderboard });
});

app.get('/api/leaderboard', (req, res) => {
    res.json({ leaderboard });
});

// Serve HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});