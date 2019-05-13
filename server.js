const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 4300

//Global middleware
app.use(express.json())
app.use(morgan('dev'))

//DB connect
mongoose.connect(
    "mongodb://localhost:27017/token-auth-1",
    { useNewUrlParser: true },
    () => console.log("connected to the DB")
)

//Routes
app.use("/auth", require('./routes/authRouter'))
//'Security Gate' for api
app.use('/api', expressJwt({ secret: process.env.SECRET }))
app.use('/api/district', require('./routes/districtRouter'))
app.use('/api/school', require('./routes/schoolRouter'))
app.use('/api/grade', require('./routes/gradeRouter'))
app.use('/api/class', require('./routes/classRouter'))
app.use('/api/test', require('./routes/testRouter'))

//Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === 'UnauthorizedError'){ //if expressJwt does not find a token
        res.status(err.status)
    }
    return res.status(500)
        .send({ errMsg: err.message })
})

//Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))