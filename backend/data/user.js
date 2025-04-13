// inthan user mock data created based on , userSchema .

// ellam each and every product kum admin ku access kudukkanum.. 
// product  , project sila users , like image lam upload pannuvanga , but full access to delete update ellam, admin ta than irukkum..
// produvct create pandrathu, user than pannuvanga , antha user la neraiya peru iruppanga , athula admin find pannanum , avarukkuthan full access irukkum , products kum  seri , customer review kum , review kuda avarala manage panna mudiyum , like delete pannalam..

// creating a sample user data

const users = [
    // ithu schema kedaiyathu , users data..
    // based on schema we created atha vachu user create pandrom.., eppothume first ah irukka use admin user than..
    // enna enna nama schema la vachurunthom na , name , password , email and isAdmin

    { // he is the admin user...
        name:"Admin user",
        email:"admin@gmail.com",
        password:"123456",
        isAdmin:true // true because he is admin
    }, 
    {
        name:"jagan",
        email:"jagan@gmail.com",
        password:"1234567",
        isAdmin:false // false , he is not admin
    },
    {
        name:"javid",
        email:"javid@gmail.com",
        password:"1234568",
        isAdmin:false // false , he is not admin
    }
]

export default users;
