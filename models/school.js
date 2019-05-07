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
    years: [
        {
            type: Schema.Types.ObjectId,
            ref: 'year'
        }
    ],
    district: {
        type: Schema.Types.ObjectId,
        ref: 'district'
    },
    schoolScoreGoal: Number,
    schoolAvgPracticeTestScore: Number,
    schoolPracticeTestTaken: Date,
    schoolAvgActualScore: Number,
    schoolActualTestTaken: Date,
    schoolChallengePoints: Number,
    schoolChallengePointsGoal: Number
})

module.exports = mongoose.model("School", schoolSchema)