const express = require('express')
const testRouter = express.Router()
const Test = require('../models/test')

//Post
testRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newTest = new test(req.body)
    newTest.save((err, savedTest) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(savedTest)
    })
})

//Get tests by requesting user
testRouter.get('/', (req, res, next) => {
    Test.find({ user: req.user._id }, (err, tests) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
            .send(tests)
    })
})

//Remove test by logged in user
testRouter.delete('/:testId', (req, res, next) => {
    Test.findOneAndRemove(
        { _id: req.params.testId, user: req.user._id }, 
        (err, deletedTest) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200)
                .send(deletedTest)
    })
})


module.exports = testRouter