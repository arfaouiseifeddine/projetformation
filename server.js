const express = require ("express")
const connect = require("./config/connectDB")


//require the router
const authRouter = require('./routes/auth')


//require router annonce

const annonceRouter = require('./routes/annonce')

const app =express();


// middelware
app.use(express.json());


// connect db
connect();




//use routes
app.use('/api/auth', authRouter)
app.use('/api/annon', annonceRouter)



// create port 
const port = process.env.PORT || 5000;
app.listen(port, (error) =>
error? console.log(error) : console.log(`server is running on port ${port}`));