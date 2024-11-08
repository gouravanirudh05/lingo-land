import Chapter from "../models/chapterModel.js";

export const getChapters = async (req, res) => {
    console.log(req.body);
    try {
        const chapters = await Chapter.find({});

        res.status(201).json({chapters: chapters, currentXP: req.user.xp});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};