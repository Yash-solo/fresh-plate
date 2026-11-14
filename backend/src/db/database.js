import mongoose from 'mongoose';
import {Recipe} from '../models/Recipe.model.js'
import { DB_Name } from '../constants.js';
import 'dotenv/config';


const connectDB = async ()=>{
    try{
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log("Database connected HOST:-",db.connection.host);

        // const newRecipe = new Recipe({})
        // const savedUser = await newRecipe.save();


    }catch(err){
        console.log("Database connection Error := ",err);
    }
}

export {connectDB};