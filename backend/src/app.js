import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());//JSON body parser middleware


app.get('/',(req,res)=>{
    res.send("WE are making fresh-plate's backend");
})



export {app};