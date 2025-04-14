

// intha middleware , only for asynch function try catch block avoid pandrathukku...
// ex oru 100 endpoints irukkuna , ellathukku try catch nu kuduthu cfreate panna mudiyathu.., so we can use a asyncHandler middleware

const asyncHandler = fn => (req, res, next) =>{
    Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncHandler; // concept ithu oru function ah resolve pannu , err iruntha catch use panni intha net la pass pannirukkumm..
// error manage panna seperate middleware create pannuvom nu sonnan..

// we can import and use it , in a routes of asynchronous function..