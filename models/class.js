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
    years: [
        {type: Schema.Types.ObjectId,
        ref: 'year'}
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
    classAvgPracticeTestScore: Number,
    classPracticeTestTaken: Date,
    classAvgActualScore: Number,
    classActualTestTaken: Date,
    classChallengePoints: Number,
    classChallengePointsGoal: Number
})

module.exports = mongoose.model("Class", classSchema)