import questionModel from "../models/questionModel";

export const checkAnswer = async (req, res) => {

    try {
        const qn = await questionModel.findOne({_id: req.user.id});
        
        if(qn.answer === req.body.ans)
            res.status(201).json({correct: true});

        else
        res.status(201).json({correct: false, answer: qn.answer});

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};