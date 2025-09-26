const express = require('express');
require('dotenv').config()
const app = express()

app.get('/test',(req,res)=>{
    res.status(200).json({msg:'testing'})
})

module.exports = app;