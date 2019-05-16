const express = require('express')
const schoolRouter = express.Router()
const School = require('../models/school')

//Post
schoolRouter.post('/', (req, res, next) => {
    if(req.body.user) {req.body.user = req.user._id}
    const newSchool = new School(req.body)
    newSchool.save((err, savedSchool) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(savedSchool)
    })
})

//Update school
schoolRouter.put('/:schoolId', (req, res, next) => {
    School.findOneAndUpdate(
        {_id: req.params.schoolId},
        req.body,
        {new: true},
        (err, updatedSchool) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201)
                .send(updatedSchool)
        }
    )
})

//Get schools by requesting user's district
schoolRouter.get('/district/:districtId', (req, res, next) => {
    School.find({ district: districtId }, (err, schools) => {
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