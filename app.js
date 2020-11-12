const express    = require('express');
const mongoose   = require('mongoose');
const app        = express();
const Driver     = require("./model/driver");
const bodyParser = require('body-parser')
const PORT       = process.env.PORT|| 8080
mongoose.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/cab_driver_v1', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});

app.use(bodyParser.urlencoded({extended: true}));

//======================
app.post('/api/v1/driver/register', (req, res) => {
    var newdriver = new Driver({ name: req.body.name, email: req.body.email, phone_number: req.body.phone_number,license_number:req.body.license_number,car_number:req.body.car_no});
    Driver.create(newdriver, function (err, data) {
        if (err) {
             res.send(err)
        }
        else {
                res.send(data);
            }
        })
    })







app.listen(PORT,()=>
{
    console.log(`http://localhost:${PORT}`)
})