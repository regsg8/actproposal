const mongoose = require('mongoose')
const Schema = mongoose.Schema

const districtSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    schools: [
        {
            type: Schema.Types.ObjectId,
            ref: 'school'
        }
    ],
    districtScoreGoal: Number,
    districtAvgPracticeTestScore: Number,
    districtPracticeTestTaken: Date,
    districtAvgActualScore: Number,
    districtActualTestTaken: Date,
    districtChallengePoints: Number,
    districtChallengePointsGoal: Number
})