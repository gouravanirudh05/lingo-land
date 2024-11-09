import User from '../models/userModel.js'

// Function to get leaderboard sorted by XP in descending order
export const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await User.find().sort({ xp: -1 });
        res.status(201).json({users: leaderboard, currentUser: req.user})
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
