const express = require('express')
const schoolRouter = express.Router()
const School = require('../models/school')

//Post
schoolRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newSchool = new school(req.body)
    newSchool.save((err, savedSchool) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(savedSchool)
    })
})

//Get schools by requesting user
schoolRouter.get('/', (req, res, next) => {
    School.find({ user: req.user._id }, (err, schools) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
            .send(schools)
    })
})

//Remove school by logged in user
schoolRouter.delete('/:schoolId', (req, res, next) => {
    School.findOneAndRemove(
        { _id: req.params.schoolId, user: req.user._id }, 
        (err, deletedSchool) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200)
                .send(deletedSchool)
    })
})


module.exports = schoolRouter