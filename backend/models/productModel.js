// i need mongoose here to create schema , so importing here...
import mongoose from "mongoose";

// next ceating schema, ithu products kanathu..


const revieSchema = new mongoose.Schema({
    // review pandravanga kudukkura details..

    // review ku admin accesss kudukkanum so , na id get panni map panni , pass panna user property kuduthachu.. here
    
    // get panna id ah , uerdra property vachu kuduthachu , seeder athan ithu..
    user:{
        type:mongoose.Schema.Types.ObjectId, // type:mongoose.Schema.Types.ObjectId >>  ithan syntax to get admin id .
        required:true,
        ref:"User" // reference is from user..
    },
    name:{
        type:String,
        required:true 
    },
    // removed inga vachuruntha rating ... palayapadi , product schema la ye kuduthachu..
    comment:{
        type:String,
        required:true 
    }
},{
    timestamps:true // to  display details of timing
})

const productSchema =new mongoose.Schema({
    // ithu enakku thevayana products la irukka each property ah , yum type  oda with anything required oda create pandrom..

    // get panna id ah , uerdra property vachu kuduthachu , seeder athan ithu..
    user:{
        type:mongoose.Schema.Types.ObjectId, // type:mongoose.Schema.Types.ObjectId >>  ithan syntax to get admin id .
        required:true,
        ref:"User" // reference is from user..
    },
    name:{
        type:String,
        required:true // required true na kandippa theva nu artham..
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number, // price type number ah get pannanum..
        required:true,
        default:0 // default na , initial ah zero va irukkum..
    },
    countInStock:{
        type:Number, // price type number ah get pannanum..
        required:true,
        default:0 // default na , initial ah zero va irukkum..
    },
    rating:{ // inserted rating in this product schema itself.., reason i have to display rating initially..
        type:Number,
        required:true ,
        default:""
    },
    numReviews:{
        type:Number, // price type number ah get pannanum..
        required:true,
        default:0 // default na , initial ah zero va irukkum..
    },
    // reviews ah mattum seperate schema va create pandrom , because ellarume rating kudukka mattanga.., so 
    reviews:[revieSchema]

},{
    timestamps:true // to display details of timing..
})

// finally intha product schema va import pannaum , variable la panna export pannaikka easy..
// export pannumpothu , variable first letter schould be in caps ..

const Product = mongoose.model("Product", productSchema) //  mongoose.model("schema name ", schemaWeCreated)

export default Product;

// ****  FINAL NOTE : create pandra schema file name , antha schema name + model nu create pannanum, ulla create pandra schema name athe vachukkalam , final en creation ku aprm ,
// export pannupohu , oru variable use panni panna , easy ah export pannikkalam.., 
// antha variable nama enna schem create pandromo athoda name vachukkalam , first letter shoulld be in caps while export ..

// created schema va seeder .js file create panni , namma db la import pannanum ..