import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    no: {type: Number},
    chapter: {type: Number},
    lesson: {type: Number},
    type: { type: String}, // e.g., 'multiple-choice', 'true-false', etc.
    text: { type: String},
    letter: {type: String},
    options: [String], // Only required for multiple-choice questions
    answer: { type: String},
});

export default mongoose.model('Question', questionSchema);
