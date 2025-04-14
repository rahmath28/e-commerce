// instead of creating all routes in the server file , createing it inside the route folder , in a seperate file based on path..

// express ta router irukku atha vachu route set panna porom..
// so for that i need to impoer expreee first
import express from "express";
import Product from "../models/productModel.js"; // remember extenion .js  is must else wont display  , missed while practice and wasted 30 mins..

const router = express.Router()

// ippo itha intha expree router , variable vachu route set pandrom..
router.get("/", async (req, res) =>{ 
    try{
        const products = await  Product.find({})  // here ennoda product schea vachuthan find pandrom , so import that in this file..
        res.json(products)
    }catch(err){
        res.status(500).json({ message: 'Failed to fetch products', err: err.message });
    }
})

router.get("/:id", async (req,res) =>{
    try {
     const foundProduct = await Product.findById(req.params.id); 
     if(foundProduct){
         res.json(foundProduct);
     } else {
         res.status(404).json({ message: "Product not found" });
     }
    } catch(err){
     res.status(500).json({ message: 'Failed to fetch product', err: err.message });
    }
 });
 
// final note : successfully create a route for product based route in a productRoutes file..,
// based on product path this file will run..
export default router;