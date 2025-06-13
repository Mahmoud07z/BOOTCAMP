const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

const userStates = {};

function getUserState(sessionId) {
  if (!userStates[sessionId]) {
    userStates[sessionId] = { current: 0, score: 0, finished: false };
  }
  return userStates[sessionId];
}

router.get('/', (req, res) => {
  const sessionId = req.query.sessionId || 'default';
  const state = getUserState(sessionId);

  if (state.finished) {
    return res.json({ message: "Quiz finished!", score: state.score });
  }

  const currentQ = triviaQuestions[state.current];
  res.json({ question: currentQ.question, number: state.current + 1 });
});

module.exports = router;