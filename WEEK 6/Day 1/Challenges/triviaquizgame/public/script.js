document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const answerInput = document.getElementById('answer-input');
  const submitBtn = document.getElementById('submit-btn');
  const feedbackContainer = document.getElementById('feedback-container');
  const scoreContainer = document.getElementById('score-container');
  const quizStatus = document.getElementById('quiz-status');
  const currentQuestionSpan = document.getElementById('current-question');
  const totalQuestionsSpan = document.getElementById('total-questions');

  let currentQuestionIndex = 0;
  let score = 0;
  let totalQuestions = 0;

  // Start the quiz
  startBtn.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/quiz');
      const data = await response.json();
      
      if (data.message === "Quiz started! Here's your first question:") {
        questionText.textContent = data.question;
        currentQuestionIndex = 0;
        score = 0;
        totalQuestions = data.totalQuestions;
        currentQuestionSpan.textContent = 1;
        totalQuestionsSpan.textContent = totalQuestions;
        
        startBtn.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        feedbackContainer.classList.add('hidden');
        scoreContainer.classList.add('hidden');
        quizStatus.textContent = '';
      }
    } catch (error) {
      console.error('Error starting quiz:', error);
    }
  });

  // Submit answer
  submitBtn.addEventListener('click', async () => {
    const userAnswer = answerInput.value.trim();
    if (!userAnswer) return;

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: userAnswer }),
      });
      const data = await response.json();

      // Show feedback
      feedbackContainer.textContent = data.feedback;
      feedbackContainer.className = data.feedback.includes('Correct!') ? 'correct' : 'incorrect';
      feedbackContainer.classList.remove('hidden');

      // Clear input
      answerInput.value = '';

      if (data.finalScore !== undefined) {
        // Quiz complete
        questionContainer.classList.add('hidden');
        scoreContainer.textContent = `Your final score: ${data.finalScore}/${data.totalQuestions}`;
        scoreContainer.classList.remove('hidden');
        startBtn.textContent = 'Restart Quiz';
        startBtn.classList.remove('hidden');
      } else {
        // Next question
        questionText.textContent = data.nextQuestion;
        currentQuestionSpan.textContent = data.questionNumber;
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  });
});