const mongoose = require("mongoose")


const Schema= mongoose.Schema

const annonceSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
        
           ref:'User',
           
    },

    

    
     title: {
    type: String,
    required:true,
                },

    prix: {
    type: String,
    required:true,
    },

    location: {
    type: String,
    required:true,
    },

    discreption: {
      type: String,
    required:true,
        }   ,

    date:{
    type:Date,
    default:Date.now()
        },

    
})

module.exports = Annonce = mongoose.model('Annonce', annonceSchema);