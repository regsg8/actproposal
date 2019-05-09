const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

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

//Pre-save hook that encrypts user's password on signup
userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified('password')) return next()
        //string to encrypt  // salt_rounds => for encryption algorithm
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

//Check user's password attempt against encrypted password in DB, returns boolean regarding match
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    })
}

//Removes user's hashed password from user object to send to front-end
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)