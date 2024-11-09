import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,

    chapter: {type: Number, default: 1},
    lesson: {type: Number, default: 1},
    xp: {type: Number, default: 0},
    todayXP: {type: Number, default: 0},
    streak: {type: Number, default: 0},
    lastQuiz: {
        type: Date,
        default: null
      },
    lastXPUpdate: {
        type: Date,
        default: null
      }
});

const User = mongoose.model('User', userSchema);

export default User;
