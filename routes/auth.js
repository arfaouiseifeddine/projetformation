const router =require('express').Router();

const {validator, registerRules , loginRules} = require('../middlewares/validator');

const config = require('config')

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


const User =require ('../models/User');

const isAuth = require('../middlewares/isAuth')

// get user api/auth/
router.get("/",async (req,res) => {
    try {
        const users = await User.find();
        res.json({msg:'data', users})
    } catch (error) {
        console.log(error);

    }
});




//route Post api/auth/register
router.post('/register',registerRules(), validator,  async (req,res)=>{
    const {name, lastName , email, password,role} = req.body;
    try {
       
       //check for existing user
       let user = await User.findOne({email})
       if (user) {
           return res.status(400).json({msg :'user already exists'})
       }
       //create new user
       user = new User({name, lastName , email, password,role});


       //create solt & hash 
       const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;


       //save user
       await user.save();

       //token 
       const payload = {
        id : user._id,

    };

    const token = await jwt.sign(payload, config.get('tokensecret'), {expiresIn : '20 days'} )
       
    res.status(200).send ({msg :'user registred with success', user, token });
    }catch (error) {
        res.status(500).send({msg : 'server error'});
    }
        
});

//route post api/auth/login
router.post("/login",loginRules(), validator, async (req,res) =>{
    const {email, password} = req.body;
    try {
        
        // chek for existing user 
        let user =  await User.findOne({email});
        if (!user){
         return   res.status(400).send({msg : 'bad credentials email'})
        }
        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).send ({msg :"bad credentials password"})
        }

        //token 
        const payload = {
            id : user._id,

        };
        const token = await jwt.sign(payload, config.get('tokensecret'), {expiresIn : '20 days'} );


        res.send({msg :'logged in with success', user , token });



    } catch (error) {
        res.status(500).send({msg : 'server error'});

    }

})


//get api/auth/user
router.get('/user', isAuth,  (req , res) => {
    res.status(200).send({user : req.user});
});


//delete user api/auth/delete/:id
router.delete("/delete/:id", async (req,res) => {
    const {id}= req.params;

    try {
        const user = await User.findByIdAndDelete({_id:id})
        res.json({msg :'user deleted', user});
    } catch (error) {
        console.log(error);
    }

});

//get user by id 
router.get ("/:id", async (req, res) =>{
    const {id} = req.params
    try {
        const user = await User.findById({_id:id})
        res.json({msg:'fetched user', user})
    } catch (error) {
        console.log(error);
    }
})

//edit user
router.put('/edit/:id', async (req,res) => {
    const {id} = req.params
    const {name, lastName , email,sex, password, role} = req.body;
    
    try {

        const edituser = await User.findByIdAndUpdate({_id :id}, {$set:req.body})
        res.json({msg :'edit user', edituser})
    } catch (error) {
        console.log(error);

    }
})


module.exports = router; 