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

// called the middleware her , app.use : express la use () use panni call pandrathu than middle ware..


app.use(cors()) // cors ah express la ipdithan call pannanum..

// app ku aprm db ah call , pannanum , import and call here..
connectDB() // calledd here , check by node command , to see its running or not..

const port = 5000;

app.get("/",(req,res) =>{
    res.send("Home screen")
    console.log("Home page")
})

// just for middleware next() , understanding.. 
app.get("/users", auth, (req,res) =>{ // na ippo /sers path pona , auth function runs first and aprm than , intha userpath la iukka function run agum..
    console.log("User")
    res.send("users page")


})

function auth(req, res, next){
    console.log("Auth") 
    next() // inga than enakku next theva reson , auth first run ana oda next rrun aganum..
   
}

// log function , to check middleware..
function log(req, res, next) {
    console.log("LOG");
    next();
} // going to call the function in the top , calling the middleware in the top is called global middleware

app.use("/api/products", productRoutes)  // api path : /api/products , ithuva iruntha , productRoutes : this file will run.. , based on path , that file runs accordingly..

// ethula listen pannanum nu sollanum
app.listen(port, () =>{
    console.log(`Server is running at ${port}`) // checked works properly..
})

// local host la port 5000 , pona , hello world proper ah display aguthu..