import express from"express"
import cors from "cors"; // cross origin , vera vera domain ah irukkuratha , access pandrathukkandi use pandrathu..
// import products from "./data/products.js"; // ithuthan ennoda backend  befor addding mongodb data..
import connectDB from "./config/db.js";
import productRoutes from"./routes/productRoutes.js"
import {notFound, errorHandler} from "./middleware/errorHandler.js";

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

// intha server run aga orru port kudukkanum..
const port = 5000;

app.get("/",(req,res) =>{
    res.send("Home screen")
    console.log("Home page")
})

// deleted middleware examples..

// path lam server la than call pannanum , intha port number la than antha paths ellam work agum so..

// path usage unnderstood.. : /api/products >> path la common ah irunthatha vachu , product routes ah run pandrom , based on path it works , used middleware la global ah call panneerukkom , so first ah nadakkum.. en vera ethum inga ithukku mel ailla..
app.use("/api/products", productRoutes)  // /api/products : vanthuruchu nale , productRoutes : intha file run agidum , antha fila irukka based o path ah poruthu , we will get data..
app.use(notFound) // for not found error
app.use(errorHandler) // for cast error , id mismatch ku..


// ethula listen pannanum nu sollanum
app.listen(port, () =>{
    console.log(`Server is running at ${port}`) // checked works properly..
})

// local host la port 5000 , intha port la than ennoda bckend datas ah pakka mudiyum , like products , particular objects ellam..