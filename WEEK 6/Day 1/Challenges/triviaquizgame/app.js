const express = require('express');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/quiz', quizRouter);

app.get('/', (req, res) => {
  console.log('Serving index.html');
  res.send("salam");
});

app.listen(PORT, () => {
  console.log(`Quiz app running at http://localhost:${PORT}`);
});