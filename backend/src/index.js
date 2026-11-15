import {connectDB} from './db/database.js'
import 'dotenv/config';
import { app } from './app.js';
import { Recipe } from './models/Recipe.model.js'; 

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

    app.listen(process.env.PORT || 9000,()=>{
        console.log("App is listening at localhost");
    });

}).catch((err)=>{
    console.log("See what's the error is :- ",err.message);
})

