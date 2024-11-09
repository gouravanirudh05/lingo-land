import User from "../models/userModel.js";

export const getProfile = async (req, res) => {
    console.log(req.body);
    try {

        const today = new Date();
      
        // Check if the last update was today
        const isSameDay = req.user.lastXPUpdate && 
          today.toDateString() === req.user.lastXPUpdate.toDateString();
      
        if (!isSameDay)  {
          await User.updateOne(
            { _id: req.user._id }, 
            { 
              todayXP: 0, 
              streak: 0, 
            }
          );
        }
      

        res.status(201).json({username: req.user.username, totalXP: req.user.xp, todayXP: req.user.todayXP, streak: req.user.streak, level: req.user.chapter});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};