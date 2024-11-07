import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    chapter: {type: Number},
    lesson: {type: Number},
    type: { type: String, required: true }, // e.g., 'multiple-choice', 'true-false', etc.
    text: { type: String, required: true },
    options: [String], // Only required for multiple-choice questions
    answer: { type: String, required: true },
});

export default mongoose.model('Question', questionSchema);
