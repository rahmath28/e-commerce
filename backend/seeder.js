// while import .js extension is must in backend..
//  this file is to seed our datas in our db..

// these two are data
import connectDB from "./config/db.js";
import products from "./data/products.js"; // this is my products dataset i have in my db..
import users from "./data/user.js"; // this is my user mock  data created based on , userSchema .
// next two are schemas ,  i created
import Product from "./models/productModel.js"; // this is my product schema ...
import User from "./models/userModel.js"; // this is my user schema..

connectDB() // ennoda db ah first run pannanum.. , in seeder , next than mtha thallam..

// imported the shemas and data , next we have to import that in our db..

// next creating a asynchronous function , to seed the datas we have here in our db..

const importData = async () => { // this function for importing data in db
    // i dont need id , while seed the data , mongodb will generate id..
    try{
        // seeder use panni , import pannumpothu , existing ah irukka data valam delete panneeranum..
        await User.deleteMany() 
        await Product.deleteMany()

        // next users create pandrom.
        const createUser = await User.insertMany(users) // schema use panni , na create panna users ah imported..
        // console.log(createUser) // got array of object of my user mock data , ineed the admin id , to provide accress to each product ,
        // first user is muy admin ,so getting that user id..

        const adminUser = createUser[0]._id;
        // console.log(adminUser) // i got the admin user id, ivanthan admin , 
        // intha id ah vachu nam ellam product kum admin access kudukkanum..

        const sampleProducts = products.map((product) =>{ // ennoda product ah map panni each product ah get pandra , 
            return {...product, user:adminUser} //that function return each products as a object , by  spread operator , use pandren , copy  of  each product eduthu , user nu onnum add pandren athan , na find panna admin id ah athula pass panni ..
            // now the admin id is passed to all products , so he can access everything now..
        }) // so next ennoda products ah Product schema vachu insert pannanum into the db

        // each products la yum user id get pannanum na , (  type:mongoose.Schema.Types.ObjectId, ) >> intha syntax than use pannanum.., ids pass panna varibale ah pass panniyachu
        await Product.insertMany(sampleProducts); // i provided admic id , to access all products..


        console.log("Data Imported")
        process.exit() //ithu ellam nadanthu mudunjuruchuna , exist the process..
    } catch(err){
        console.log(err.message)
        process.exit(1) // remeber this line is must , err na , antha process apdiye  to kill 
    }
}

const destroyData = async () =>{
    try{
        // destroy data layum , same than .., existing ah irukka ellathaiyum delete pannanum..
        await User.deleteMany() 
        await Product.deleteMany()

        console.log("Data Destroyed")
        process.exit() // exit : na stops the process.

    }catch(err){
        console.log(err)
        process.exit(1) // exit(1) : na kill the process

    }
}

// console.log(process) // i will get the entire process in terminal.. , argv na argument
// console.log(process.argv) // i got this [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\MERN\\e-com\\backend\\seeder'] , itha base pannithan condition ,  na type pandra ellame ithula display agum , which means intha array  la add agum..

// ippo : intha command run panna , i get :  [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\MERN\\e-com\\backend\\seeder', -d]  ithula ennoda -d add aguthu , itha argument nu sollvom , -d mari pass pandrathu..

// *** -d na , destroy pandrathu.. *** , // itha base panni condition



 // final condition based on the argument..
 if(process.argv[2] ==="-d"){ // process la destroy panna -d argument pass panna , destroy data function run agum.. , -d kudutha argument 2 la athu add agum..
    destroyData() // na argument la command pass pannumpothu -d , nu iruntha intha arry la 2nd index la add agum , so condition is based on that..
 }else{
    importData() // ethum pass pannala na import data..
 } 

 // next ithukku written two scripts ..,in  Backend package.json la added two script , to  easily import and destroy..

 // two command :

//  "data:import":"node backend/seeder.js", // seeder muliyama than data va import pandrom , : to run import data : npm run data:import
//  "data:destroy":"node backend/seeder.js -d" // seeder la -d argument pass panni than destroy uhm pandrom , : to run destroy data : npm run data:destroy
// so script ah eluthiyachu..


// checked and run with two script of import and destroy both working successfully..
