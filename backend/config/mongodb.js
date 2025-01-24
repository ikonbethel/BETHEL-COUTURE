import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', ()=>{
        console.log("DataBase connection Successfully!");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/BETHEL-COUTURE`)

}
 
export default connectDB;