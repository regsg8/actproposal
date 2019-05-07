const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    grades: [
        {type: Schema.Types.ObjectId,
        ref: 'grade'}
    ],
    school: {
        type: Schema.Types.ObjectId,
        ref: 'school'
    },
    district: {
        type: Schema.Types.ObjectId,
        ref: 'district'
    },
    created: {
        type: Date,
        default: Date.now()
    },
    classScoreGoal: Number,
    classAvgCompositePractice: Number,
    classAvgEnglishPractice: Number,
    classAvgReadingPractice: Number,
    classAvgMathPractice: Number,
    classAvgSciencePractice: Number,
    classChallengePoints: Number,
    classChallengePointsGoal: Number
})

module.exports = mongoose.model("Class", classSchema)