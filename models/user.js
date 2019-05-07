const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    classes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'class'
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
    isStudent: {
        type: Boolean,
        default: false
    },
    isClassAdmin: {
        type: Boolean,
        default: false
    },
    isSchoolAdmin: {
        type: Boolean,
        default: false
    },
    isDistrictAdmin: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    },
    scoreGoal: Number,
    practiceTestScore: Number,
    practiceTestTaken: Date,
    actualScore: Number,
    actualTestTaken: Date,
    challengePoints: Number,
    challengePointsGoal: Number
})

module.exports = mongoose.model("User", userSchema)