const express = require('express')
const gradeRouter = express.Router()
const Grade = require('../models/grade')

//Post
gradeRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newGrade = new Grade(req.body)
    newGrade.save((err, savedGrade) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(savedGrade)
    })
})

//Get grades by requesting user
gradeRouter.get('/', (req, res, next) => {
    Grade.find({ user: req.user._id }, (err, grades) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
            .send(grades)
    })
})

//Remove grade by logged in user
gradeRouter.delete('/:gradeId', (req, res, next) => {
    Grade.findOneAndRemove(
        { _id: req.params.gradeId, user: req.user._id }, 
        (err, deletedGrade) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200)
                .send(deletedGrade)
    })
})


module.exports = gradeRouter