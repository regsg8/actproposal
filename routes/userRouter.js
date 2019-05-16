const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

//Update one user
userRouter.put('/:userId', (req, res, next) => {
    console.log(req.body)
    User.findOneAndUpdate(
        {_id: req.params.userId},
        req.body,
        {new: true},
        (err, updatedUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201)
                .send(updatedUser)
        }
    )
})

//Get users by requesting user
userRouter.get('/', (req, res, next) => {
    User.find({ user: req.user._id }, (err, users) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
            .send(users)
    })
})

//Remove user by logged in user
userRouter.delete('/:userId', (req, res, next) => {
    User.findOneAndRemove(
        { _id: req.params.userId, user: req.user._id }, 
        (err, deletedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200)
                .send(deletedUser)
    })
})


module.exports = userRouter