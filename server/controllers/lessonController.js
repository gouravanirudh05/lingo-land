import questionModel from "../models/questionModel.js";
import User from "../models/userModel.js";

export const checkAnswer = async (req, res) => {

    try {
        const qn = await questionModel.findOne({chapter: req.body.chapter, lesson: req.body.lesson, no: req.body.questionNo});
        
            if(qn.answer === req.body.ans)
                res.status(201).json({correct: true});

            else
                res.status(201).json({correct: false, answer: qn.answer});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const nextQuestion = async (req, res) => {
    console.log(req.body);
    var properties = req.body;
    try {
        const qn = await questionModel.findOne({chapter: properties.chapter, lesson: properties.lesson, no: properties.questionNo});
        res.status(201).json({qn: qn.text, options: qn.options, letter: qn.letter});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getNumberOfQuestions = async (req, res) => {
    console.log(req.body);
    try {
        const noOfQns = await questionModel.countDocuments({chapter: req.body.chapter, lesson: req.body.lesson});
        
        res.status(201).json({noOfQns: noOfQns});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const handleFinishQuiz = async (req, res) => {
    console.log(req.body);
    try {
        await User.updateOne({_id: req.user._id}, {xp: req.user.xp + req.body.noOfCorrect});

        res.status(201).json({noOfQns: noOfQns});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


