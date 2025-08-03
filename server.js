// server.js or index.js
import express from 'express';
import 'dotenv/config';
import connectDB from './db.js'; // Make sure this works
import router from './routes/registerUser.routes.js';

const app = express();
app.use(express.json()); // To parse JSON body

app.get('/ping', (req, res) => {
  res.send('pong');
});

connectDB(); // Connect to MongoDB

// Mount all /users routes under /api
app.use('/api', router); // This makes /api/users/register work

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
