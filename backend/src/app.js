import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    origin:"https://fresh-plate-frontend.vercel.app/",
    credentials: true,
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"]
}));
app.use(express.json());//JSON body parser middleware


app.get('/',(req,res)=>{
    res.send("WE are making fresh-plate's backend");
})



export {app};