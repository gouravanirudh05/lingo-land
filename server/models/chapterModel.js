import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const chapterSchema = new mongoose.Schema({
    title: { type: String, required: true },
    lessons: [lessonSchema],
    requiredXP: { type: Number, required: true }
});

export default mongoose.model('Chapter', chapterSchema);
