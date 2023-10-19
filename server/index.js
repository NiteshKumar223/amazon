// IMPORTS FROM PACKAGES
const express = require("express");
// it is just like import package in flutter
const mongoose = require('mongoose');

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");


// INIT
const PORT = 3000;
const app = express();
const db = "mongodb+srv://niteshamazon:cloZone@cluster1.tkhisqp.mongodb.net/?retryWrites=true&w=majority";

// middleware
// client -> server -> client
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);


//connection
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connection successful");
})
    .catch((e)=>{
        console.log(e);
})

   
// creatting an API  

app.listen(PORT, "0.0.0.0", ()=>{
    console.log('connected at port '+PORT);
} );