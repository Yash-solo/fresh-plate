import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';
import 'dotenv/config';


const connectDB = async ()=>{
    try{
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`,{
            serverSelectionTimeoutMS: 5000,
            autoIndex: true,
            minPoolSize: 10,
            socketTimeoutMS: 45000,
        });
        console.log("Database connected HOST:-",db.connection.host);

        // const newRecipe = new Recipe({})
        // const savedUser = await newRecipe.save();


    }catch(err){
        console.log("Database connection Error := ",err);
    }
}

export {connectDB};