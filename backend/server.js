import express from"express"
import cors from "cors";
// import products from "./data/products.js"; // ithuthan ennoda backend  befor addding mongodb data..
import connectDB from "./config/db.js";
import productRoutes from"./routes/productRoutes.js"

//mongodb+srv://rahmath:<db_password>@ecom.jfvodxw.mongodb.net/?retryWrites=true&w=majority&appName=ecom  >> (this is my db url)

// mongodb+srv://rahmath:<db_password>@ecom.jfvodxw.mongodb.net/


// express la important ana onnum iport pannumpothu , ectension filename.js na >> extension "js uhm sethu mention pannanum " front end la extension theva illa..

// data frontend root la irunthu get pandrom, backend la irunthu ippo get panna porom..


// we should install cors package , domain (same ah illana : which mean ennoda front end port number vera server odathu vera , so nama than real user nu doubt la data kudukathu retrict panniru )
//  so we must install CORS PACKAGE IN " BACKEND" in the server.. ( CORS NA : Etho something cross origin nu varum..)

const app = express();
app.use(cors()) // cors ah express la ipdithan call pannanum..

// app ku aprm db ah call , pannanum , import and call here..
connectDB() // calledd here , check by node command , to see its running or not..
// displays , mongodb is connected and server running at 5000 . , so successfully running ..
// db la password la oru number , remove pannitu check panna , err : bad authentication displays successfully..
// next i have to create schemas... for our projects.. ,

// we have set port
const port = 5000;

app.get("/",(req,res) =>{
    res.send("Hello World")
})

// i removed the product fetch api paths kept here and created it in seperate folder of routes inside productRotes..
// na antha file la na set panna path enakku run aganum na , middle ware use panni call panna pothu..
app.use("/api/products", productRoutes)  // api path : /api/products , ithuva iruntha , productRoutes : this file will run.. , based on path , that file runs accordingly..

// ethula listen pannanum nu sollanum
app.listen(port, () =>{
    console.log(`Server is running at ${port}`) // checked works properly..
})

// local host la port 5000 , pona , hello world proper ah display aguthu..