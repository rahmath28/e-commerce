// instead of creating all routes in the server file , createing it inside the route folder , in a seperate file based on path..

// express ta router irukku atha vachu route set panna porom..
// so for that i need to impoer expreee first
import express from "express";
import Product from "../models/productModel.js"; // remember extenion .js  is must else wont display  , missed while practice and wasted 30 mins..
import asyncHandler from "../middleware/asyncHandler.js";


const router = express.Router()


// api la irunthu fetch pandra nala , ellame asynchronous function..

// ippo itha intha expree router , variable vachu route set pandrom..
// try catch remove panni , aynchandler middleware use pandrom..
router.get("/", asyncHandler(async (req, res) =>{   // intha asynchandler middleware intha function ah resolve pannuthu avlotha.., err iruntha atha manage panna thani middle ware ini write pannanum..
    
    const products = await Product.find({}) // asyncHandler middleware use panna nale try catch block theva illa..
    res.json(products) // enakku kedaikra data va response ah than send pannanum..
}))

router.get("/:id",asyncHandler (async (req, res) =>{ // intha asynchandler middleware intha function ah resolve pannuthu avlotha.., err iruntha atha manage panna thani middle ware ini write pannanum..
     // asyncHandler middleware use panna nale try catch block theva illa..
     const foundProduct = await Product.findById(req.params.id);  // findById , backend la , itha use panni nama antha product ah get panna mudiyum..
     if(foundProduct){
         res.json(foundProduct); // enakku kedaikra data va response ah than send pannanum..
     } else {
         res.status(404).json({ message: "Product not found" }); // front end error displaay pandrathukkandi..
     }
   
 }));
 
// final note : successfully create a route for product based route in a productRoutes file..,
// based on product path this file will run..
export default router;