// instead of creating all routes in the server file , createing it inside the route folder , in a seperate file based on path..

// express ta router irukku atha vachu route set panna porom..
// so for that i need to impoer expreee first
import express from "express";
import Product from "../models/productModel.js"; // remember extenion .js  is must else wont display  , missed while practice and wasted 30 mins..
import asyncHandler from "../middleware/asyncHandler.js";


const router = express.Router()

// ippo itha intha expree router , variable vachu route set pandrom..
// try catch remove panni , aynchandler middleware use pandrom..
router.get("/", asyncHandler(async (req, res) =>{   // intha asynchandler middleware intha function ah resolve pannuthu avlotha.., err iruntha atha manage panna thani middle ware ini write pannanum..
    
    const products = await Product.find({}) // asyncHandler middleware use panna nale try catch block theva illa..
    res.json(products)
}))

router.get("/:id",asyncHandler (async (req, res) =>{ // intha asynchandler middleware intha function ah resolve pannuthu avlotha.., err iruntha atha manage panna thani middle ware ini write pannanum..
     // asyncHandler middleware use panna nale try catch block theva illa..
     const foundProduct = await Product.findById(req.params.id); 
     if(foundProduct){
         res.json(foundProduct);
     } else {
         res.status(404).json({ message: "Product not found" });
     }
   
 }));
 
// final note : successfully create a route for product based route in a productRoutes file..,
// based on product path this file will run..
export default router;