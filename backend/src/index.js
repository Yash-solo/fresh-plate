import {connectDB} from './db/database.js'
import 'dotenv/config';
import { app } from './app.js';
import { Recipe } from './models/Recipe.model.js'; 
import { DB_Name } from './constants.js';
import mongoose from 'mongoose';

connectDB()
.then((res)=>{
    console.log("Connection does't fail anytime");
    app.post('/askRecipe',async(req,res)=>{
        try {
            console.log("promptList:- ",req.body);
            const getRecipe = await Recipe.find({
                ingredients:{$in :req.body},
            });
            
            if(getRecipe!==null){
                res.status(200).json({
                    success: true,
                    status:200,
                    message: "Your query successfully reached",
                    item:getRecipe,
                })
            }else{
                res.status(200).json({
                    success: true,
                    message: "Didn't found your asked recipes with given ingredients",
                })
            }
        } catch (error) {
            console.log("Status 500 with error:- ",error.message);
        }
    })
    //get frige item's photoes from db and send it to frontend back
    app.post("/fridgeItem",async(req,res)=>{
        try{
            const demoArr = req.body;
            const ingredientPICs = mongoose.connection.db.collection('ingredientPICs');
            const promiseArray = demoArr.map(async(name)=>{
                const getElement = await ingredientPICs.findOne({itemName:name.itm});
                return getElement?.itemImage;
            })
            const returnedArray = await Promise.all(promiseArray);
            if(returnedArray){
                res.status(200).json({
                    success:true,
                    message:"You query acccepted succsessfully",
                    itemPics:returnedArray
                })
            }
            
        }catch(err){
            console.log("Status 500 with error:- ",err.message);
        }
    })

    app.listen(process.env.PORT || 9000,()=>{
        console.log("App is listening at localhost");
    });

}).catch((err)=>{
    console.log("See what's the error is :- ",err.message);
})

