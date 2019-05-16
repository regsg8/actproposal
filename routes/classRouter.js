const express = require('express')
const classRouter = express.Router()
const Class = require('../models/class')

//Post
classRouter.post('/', (req, res, next) => {
    if(req.body.user) {req.body.user = req.user._id}
    const newClass = new Class(req.body)
    newClass.save((err, savedClass) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(savedClass)
    })
})

//Get classes by requesting user
classRouter.get('/', (req, res, next) => {
    Class.find({ user: req.user._id }, (err, classes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
            .send(classes)
    })
})

//Remove class by logged in user
classRouter.delete('/:classId', (req, res, next) => {
    Class.findOneAndRemove(
        { _id: req.params.classId, user: req.user._id }, 
        (err, deletedClass) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200)
                .send(deletedClass)
    })
})


module.exports = classRouter