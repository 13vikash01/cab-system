const express   = require('express');
const mongoose  = require('mongoose');
const app       = express();
const PORT      = process.env.PORT|| 8080
mongoose.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/cab_driver_v1', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});


app.listen(PORT,()=>
{
    console.log(`http://localhost:${PORT}`)
})