
const  dotenv = require('dotenv');

const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
///import the useshema file
const app = express();

const User = require('./model/userSchema');
const auth = require('./middlewares/auth');
// app variable ju hum ny decalared kiya hae us ky aundar sary express method a gy hae
 ////database connection////
const db =
process.env.MONGODB_URI ||
'mongodb+srv://Aqeel:aqeel12345@cluster0.uhg7y9z.mongodb.net/visiosparkwebsite?retryWrites=true&w=majority';

// Connect to MongoDB instance
mongoose
.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully.'))
.catch((err) => console.log('MongoDB connection error: ' + err));



///Data Base conction
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT;
///connection file requre
require('./db/conn')
///ju b data json mae a us ko convert kr do object
app.use(express.json());
app.use(cors())

//////////////////// 
app.use((req, res, next) => {
    console.log("HTTP Method -" + req.method + ", URL" +req.url )
        next()
})

///router import
app.use(require('./router/auth'))

//////midlleware 
const middleware = (req, res, next) => {
    console.log('Hello my Middleware');
    next();
}


app.get('/' , (req, res) =>{
    res.send('heel0 word from the server app js')
});
app.get('/home' ,auth, (req, res) =>{
    res.send('heel0 word from the server')
});
app.get('/about' , auth, (req, res) =>{
    console.log('Hello');

    res.send('About Information from the server')
});
app.get('/contact', (req, res) =>{
    res.send('Contact Information from the server')
});app.get('/singin' , (req, res) =>{
    res.send('Singin from the server')
});
app.get('/singup' , (req, res) =>{
    res.send('Sungup from the server')
});

app.listen(PORT, ()=>{
    console.log(`server id running at port no ${PORT}`)
})