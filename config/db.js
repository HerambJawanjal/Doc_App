const mongoose=require('mongoose');

const color=require('colors');

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MongoDB_ULR);
        console.log(`DB connection Succesfull ${mongoose.connection.host}`.bgBlue.white);
    } catch (error){
        console.log(`MongoDB server issue ${error}`.bgRed.white);
    }
}

module.exports=connectDB 