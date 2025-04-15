// this middleware is for , Not Found Errors..

const notFound = (req, res, next) =>{
    // console.log(req)
    const error = new Error(`Not Found - ${req.originalUrl}`)
    next(error) // passed the erro ri got in the next..
}

// this eror is for castError , id mismatch ku..
const errorHandler = (err, req, res, next) =>{
    let statusCode = 200 ? 500 : res.statusCode;  // ithu just new error throw pandrathukkana logic , venumgura edathula new Error throw pannalam.., new err throw panna statsu code 500..
    let message = err.message; // na pass panna pora er, message..
    
    if(err.name === "CastError"){
        // casterror passing message and statsu code 404 , to display in front end
        message = `Resource  Not Found`
        statusCode = 404;
    }
    res.status(statusCode).json({message})
}
export  {notFound, errorHandler};