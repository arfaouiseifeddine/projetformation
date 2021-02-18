const mongoose = require("mongoose")


const Schema= mongoose.Schema

const userSchema = new Schema({
    
    
    name : {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required:true,
    },

    
    email: {
        type: String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
    
    role: {
        type:String,
        default:"agent",
        enum:["agent","admin"]
    },

    youtube:{type:String},
    twitter:{type:String},
    facebook:{type:String},
    linkedin:{type:String},
    instagram:{type:String},
})

module.exports = User = mongoose.model('User', userSchema);