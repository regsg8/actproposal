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
    districtAvgCompositePractice: Number,
    districtAvgEnglishPractice: Number,
    districtAvgReadingPractice: Number,
    districtAvgMathPractice: Number,
    districtAvgSciencePractice: Number,
    districtChallengePoints: Number,
    districtChallengePointsGoal: Number
})

module.exports = mongoose.model("District", districtSchema)