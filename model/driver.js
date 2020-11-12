var mongoose = require("mongoose");

var DriverSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone_number:Number,
    license_number:String,
    car_number:String
});
 

module.exports = mongoose.model("Driver", DriverSchema);