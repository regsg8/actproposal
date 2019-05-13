const express = require('express')
const districtRouter = express.Router()
const District = require('../models/district')

//Post
districtRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newDistrict = new District(req.body)
    newDistrict.save((err, savedDistrict) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(savedDistrict)
    })
})

//Get Districts by requesting user
districtRouter.get('/', (req, res, next) => {
    District.find({ user: req.user._id }, (err, districts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
            .send(disctricts)
    })
})

//Remove District by logged in user
districtRouter.delete('/:districtId', (req, res, next) => {
    District.findOneAndRemove(
        { _id: req.params.districtId, user: req.user._id }, 
        (err, deletedDistrict) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200)
                .send(deletedDistrict)
    })
})


module.exports = districtRouter