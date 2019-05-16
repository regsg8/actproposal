const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    data: Object,
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    classes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        }
    ],
    grades: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Grade'
        }
    ],
    district: {
        type: Schema.Types.ObjectId,
        ref: 'District'
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