// i need mongooese to create a schema , so importing..
import mongoose from "mongoose";

// next schema creation for user..

const userSchema = new mongoose.Schema({
    // user la thevayan details ah schema va create pandrom..
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true // unique true , na uniques ah irukkanum..
    },
    password:{
        type:String,
        required:true,
    },
    // finally admin ah nu check pannanum
    isAdmin:{
        type:Boolean, //  type:Boolean >> na , true ah illa false ah nu , boolean values pass..
        default:false // default ah   false, which means admin kedaiyathu....
    }
},{
    timestamps:true // to disply timing
})
// finally export ,variable la panna export pannaikka easy..
// export pannumpothu , variable first letter schould be in caps ..

const User = mongoose.model("User",userSchema)//  mongoose.model("schema name ", schemaWeCreated)

export default User;

// ****  FINAL NOTE : create pandra schema file name , antha schema name + model nu create pannanum, ulla create pandra schema name athe vachukkalam , final en creation ku aprm ,
// export pannupohu , oru variable use panni panna , easy ah export pannikkalam.., 
// antha variable nama enna schem create pandromo athoda name vachukkalam , first letter shoulld be in caps while export ..

// created schema va seeder .js file create panni , namma db la import pannanum ..