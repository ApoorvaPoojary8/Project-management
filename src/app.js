import express from "express";



const app = express();


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/instragram',(req,res)=>{
    res.send("This is an instragram page");
})


export default app;



