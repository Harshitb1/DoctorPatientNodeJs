var mongoose = require("mongoose")
passportLocalMongoose = require("passport-local-mongoose");

var doctorSchema = new mongoose.Schema({
    name: String,
    password: String,
    department: String,
    phoneNo: String,
    username: String,
    newQuestions: [{
        type: String
    }],
    oldQuestion:[{
        type: String
    }]
});

doctorSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Doctor",doctorSchema);