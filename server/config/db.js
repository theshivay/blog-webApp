import mongoose from "mongoose";


// DB connection async function
const connectDB = async ()=>{
    const res = await mongoose.connect(process.env.MONGO_URL)
    if(res){
        console.log("Database Connected");
    }
};


export default connectDB;