import express from"express"

const app = express();
// we have set port
const port = 5000;

app.get("/",(req,res) =>{
    res.send("Hello World")
})

// ethula listen pannanum nu sollanum
app.listen(port, () =>{
    console.log(`Server is running at ${port}`) // checked works properly..
})

// local host la port 5000 , pona , hello world proper ah display aguthu..