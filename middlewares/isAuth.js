const jwt = require('jsonwebtoken');
const config = require('config')

const User = require ('../models/User');

const isAuth = async (req,res, next) => {
    try {
        const token = req.headers['x-auth-token']

        if (!token)
        return res.status(401).send ({msg : 'no token'})

        const decoded = await jwt.verify(token , config.get('tokensecret'));

        const user = await User.findById(decoded.id);

        if (!user){
            return res.status(401).send ({msg : 'authorization denied'});

        }

        req.user = user;

         
        next ();


    } catch (error) {
        return res.status(400).json ({msg : 'token is not valid'});

    }
}

module.exports = isAuth;