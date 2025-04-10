import express from"express"
import cors from "cors";
import products from "./data/products.js"; // ithuthan ennoda backend data..


// express la important ana onnum iport pannumpothu , ectension filename.js na >> extension "js uhm sethu mention pannanum " front end la extension theva illa..

// data frontend root la irunthu get pandrom, backend la irunthu ippo get panna porom..


// we should install cors package , domain (same ah illana : which mean ennoda front end port number vera server odathu vera , so nama than real user nu doubt la data kudukathu retrict panniru )
//  so we must install CORS PACKAGE IN " BACKEND" in the server.. ( CORS NA : Etho something cross origin nu varum..)

const app = express();
app.use(cors()) // cors ah express la ipdithan call pannanum..

// we have set port
const port = 5000;

app.get("/",(req,res) =>{
    res.send("Hello World")
})

// server la than path create panni set pannanum..
app.get("/api/products", (req, res) =>{ // intha  ("/api/products")  path  : la , na ennoda backend la irukka data va , send panna poren.., athukku antha backend data va inga import pannanum
     res.json(products) // na send pandra response data jsong string ah send panna theva illa , express use pandra nala array of object , express() ellathaithum pathukku.. , stringify lam..
})
// res.send(products)  : send nalum , res.json(products) nalum same than but text ah illa data va json ah pandrathuthan best practice..

 // check path worrking successfully..
 // http://localhost:5000/api/products : this is the apiPath i create by the backend data..  : displaying the array of datas in the path i created..
// ippo intha path muliyama homescreen la fetch panna porom..

app.get("/api/products/:id", (req,res) =>{
    console.log(req.params.id); // got data , data console la display panna , :  http://localhost:5000/api/products/2 ( summa ennoda antha path la oru id select panni , antha url ah select panni enter thattuna , request send i will get id)
    // intha id vachutha namma data va fid panni get panna porom..
    const foundProduct = products.find((item) => item._id === req.params.id); // ennoda datas la irukka id uhm , param id match anan atha find methood use panni get pandren..
    // console.log(foundProduct) // i got the full data , localhost url la ethavhu idd selct panni enter kudukkanu appothan enakku terminal la console agum..
    res.json(foundProduct) // send the product i got , now in tha path vachu enna fetch panni kedacha product ah display panna mudiyum..
    
})


// ethula listen pannanum nu sollanum
app.listen(port, () =>{
    console.log(`Server is running at ${port}`) // checked works properly..
})

// local host la port 5000 , pona , hello world proper ah display aguthu..