const express = require('express')
const districtRouter = express.Router()
const District = require('../models/district')
const School = require('../models/school')

//Post
districtRouter.post('/', (req, res, next) => {
    if(req.body.user) {req.body.user = req.user._id}
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
            .send(districts)
    })
})

//Get District by Id with schools
districtRouter.get('/:districtId', async (req, res, next) => {
    try {
    const district = await District.find({ _id: req.params.districtId })
    const schools = await School.find({ _id: {$in: district[0].schools }})

    return res.status(200).send({district, schools})
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

//Update District
districtRouter.put('/:districtId', (req, res, next) => {
    District.findOneAndUpdate(
        {_id: req.params.districtId},
        req.body,
        {new: true},
        (err, updatedDistrict) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201)
                .send(updatedDistrict)
        }
    )
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