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

    chapter: {type: Number},
    lesson: {type: Number},

    streak: {type: Number}
});

const User = mongoose.model('User', userSchema);

export default User;
