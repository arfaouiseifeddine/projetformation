const router =require('express').Router();
const Annonce = require('../models/Annonce')

//get annonce api/annon/
router.get("/", async (req,res) => {
    try {
        const annonce = await Annonce.find().populate('user','name email ');
        res.json({msg:'data Annonce', annonce})
    } catch (error) {
        console.log(error);

    }
});

//post add annonce
router.post("/add", async (req, res) =>{
    const {user,title,prix,location,discreption} = req.body;
    try {
        const newAnnonce = new Annonce({user,title,prix,location,discreption});
        const annonce = await newAnnonce.save();
        res.json({msg :"annonce added", annonce})
    } catch (error) {
        console.log(error)
    }
})

// delete
router.delete("/delete/:id", async (req,res) => {
    const {id}= req.params;

    try {
        const annonce = await Annonce.findByIdAndDelete({_id:id})
        res.json({msg :'annonce deleted', annonce});
    } catch (error) {
        console.log(error);
    }

})

// edit annonce 
router.put('/edit/:id', async (req,res) => {
    const {id} = req.params
    const {title,prix,location,discreption} = req.body;
    
    try {

        const editannonce = await Annonce.findByIdAndUpdate({_id :id}, {$set:req.body}).populate('user','name email -_id')
        res.json({msg :'edit annonce', editannonce})
    } catch (error) {
        console.log(error);

    }
})
//get profile by id 
router.get ("/:id", async (req, res) =>{
    const {id} = req.params
    try {
        const annonce = await Annonce.findById({_id:id}).populate('user','name email -_id')
        res.json({msg:'fetched profile', annonce})
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;