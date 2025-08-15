// server.js or index.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './db.js'; // Make sure this works
import router from './routes/registerUser.routes.js';
import routerSubject from './routes/subject.router.js';

const app = express();
app.use(express.json()); // To parse JSON body
app.use(cors());

connectDB(); // Connect to MongoDB

// Mount all /users routes under /api
app.use('/api', router); // This makes /api/users/register work
app.use('/api', routerSubject); // This makes /api/users/register work

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
