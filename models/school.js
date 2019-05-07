const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    classes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'class'
        }
    ],
    grades: [
        {
            type: Schema.Types.ObjectId,
            ref: 'grade'
        }
    ],
    district: {
        type: Schema.Types.ObjectId,
        ref: 'district'
    },
    schoolScoreGoal: Number,
    schoolAvgCompositePractice: Number,
    schoolAvgEnglishPractice: Number,
    schoolAvgReadingPractice: Number,
    schoolAvgMathPractice: Number,
    schoolAvgSciencePractice: Number,
    schoolChallengePoints: Number,
    schoolChallengePointsGoal: Number
})

module.exports = mongoose.model("School", schoolSchema)