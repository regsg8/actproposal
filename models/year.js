const mongoose = require('mongoose')
const Schema = mongoose.Schema

const yearSchema = new Schema({
    name: {
        type: Number,
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
    yearScoreGoal: Number,
    yearAvgPracticeTestScore: Number,
    yearPracticeTestTaken: Date,
    yearAvgActualScore: Number,
    yearActualTestTaken: Date,
    yearChallengePoints: Number,
    yearChallengePointsGoal: Number
})

module.exports = mongoose.model("Year", yearSchema)