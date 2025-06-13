const express = require('express');
const app = express();
const userRoutes = require('./server/routes/users.routes');
const PORT = 5000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});