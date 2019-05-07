const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gradeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    classes: [{
        type: Schema.Types.ObjectId,
        ref: 'class'
    }],
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
    gradeScoreGoal: Number,
    gradeAvgCompositePractice: Number,
    gradeAvgEnglishPractice: Number,
    gradeAvgReadingPractice: Number,
    gradeAvgMathPractice: Number,
    gradeAvgSciencePractice: Number,
    gradeChallengePoints: Number,
    gradeChallengePointsGoal: Number
})

module.exports = mongoose.model("grade", gradeSchema)