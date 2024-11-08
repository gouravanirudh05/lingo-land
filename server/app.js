// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'node:http';
import authRoutes from './routes/authRoutes.js';
import lessonRoutes from './routes/lessonRoutes.js';
import chapterRoutes from './routes/chapterRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = createServer(app);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mylingodatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.use('/api/auth', authRoutes);
app.use('/api/lesson', lessonRoutes);
app.use('/api/chapter', chapterRoutes);



export default server;

