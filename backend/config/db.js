// mongodb+srv://rahmath:<db_password>@ecom.jfvodxw.mongodb.net/     // this is the url i got , to connect db

//  Mongodb ccess pandrathu mongoose package vachuthan access panna mudiyum..  
import mongoose from "mongoose";

// crating a db as a asynchrous function , to connect db.
const connectDB  = async () =>{

    try{
        const connect = await mongoose.connect("mongodb+srv://rahmath:rahmath123@ecom.jfvodxw.mongodb.net/ecom") // last ah .net ku aprm nammma db kana name kudukkalam.. 
        console.log(`Mongo DB is 'connected'`) // connected successfully na mongodb connected nu varum..
    }catch(err){
        console.log(`Error message : ${err.message}`) // err message display pandrom , if err na..
        // if error iruntha, intha process ah  kill pandrom.
        process.exit(1)
    }
}

// finally export , to use our db..
export default connectDB; // created db , next server la caal pannanum ,so import and call the db... appothan enaku data kedaikum..