import Chapter from "../models/chapterModel.js";

export const getChapters = async (req, res) => {
    console.log(req.body);
    try {
        const chapters = await Chapter.find({});
        if(req.user)
            res.status(201).json({chapters: chapters, currentXP: req.user.xp, loggedIn: true});
        else
            res.status(401).json({chapters: chapters, loggedIn: false});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};