var mongoose = require("mongoose");

var DriverSchema = new mongoose.Schema({
    name: {type:String,unique:true,required:true},
    email: {type:String,unique:true,required:true},
    phone_number: {type:Number,unique:true,required:true},
    license_number: {type:String,unique:true,required:true},
    car_number:{type:String,unique:true,required:true},
});
 

module.exports = mongoose.model("Driver", DriverSchema);