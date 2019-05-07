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
    practiceTests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'test'
        }
    ],
    actualTests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'test'
        }
    ],
    classes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'class'
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
    isActAdmin: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    },
    scoreGoal: Number,
    challengePoints: Number,
    challengePointsGoal: Number,
    testTakingPersonality: String
})

module.exports = mongoose.model("User", userSchema)