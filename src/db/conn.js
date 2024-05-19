const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB || "mongodb://localhost:/27017/amazon",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful");
}).catch((error)=>{
    console.log(error);
    console.log("No Connection");
})