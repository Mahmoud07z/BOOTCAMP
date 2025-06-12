// emoji-guessing-game/server.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3000;

// Sample emoji dataset
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🦄', name: 'Unicorn' },
    { emoji: '🏀', name: 'Basketball' }
];

let leaderboard = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({ secret: 'emoji-secret', resave: false, saveUninitialized: true }));

function getRandomQuestion() {
    const correctIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[correctIndex];
    
    const options = new Set();
    options.add(correctEmoji.name);
    while (options.size < 4) {
        const random = emojis[Math.floor(Math.random() * emojis.length)].name;
        options.add(random);
    }
    return {
        emoji: correctEmoji.emoji,
        correct: correctEmoji.name,
        options: Array.from(options).sort(() => Math.random() - 0.5)
    };
}

app.get('/', (req, res) => {
    if (!req.session.score) req.session.score = 0;
    const question = getRandomQuestion();
    req.session.currentAnswer = question.correct;
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/question', (req, res) => {
    const question = getRandomQuestion();
    req.session.currentAnswer = question.correct;
    res.json({
        emoji: question.emoji,
        options: question.options,
        score: req.session.score
    });
});

app.post('/guess', (req, res) => {
    const guess = req.body.guess;
    const correct = req.session.currentAnswer;
    let result;

    if (guess === correct) {
        req.session.score++;
        result = 'correct';
    } else {
        result = 'wrong';
    }

    res.json({
        result,
        correct,
        score: req.session.score
    });
});

app.get('/leaderboard', (req, res) => {
    leaderboard.push({ score: req.session.score });
    leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10);
    res.json(leaderboard);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
