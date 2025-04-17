// ithu endpoints kana slice file..
// entha endpoint la inject pannanumo atha , import pannanum and etha inject pannanumo need that also..
// apiSlice oda endpoint la than na , inject pannanum..
import apiSlice from "./apiSlice";
import { PRODUCT_URL } from "../src/constants"; // intha endpoint ah than , inject panna porom..

const productApiSlice = apiSlice.injectEndpoints({
    // injectendpoints method use panni ennoda , enpoints ah inject pandrom..
    endpoints:(builder) =>({
        getPruducts:builder.query({ // data get pandrom na , query method use pannanum..
             query: () => ({url:PRODUCT_URL}) 
        }),
        getPruductDetails:builder.query({// data get pandrom na , query method use pannanum..
            query: (id) => ({url:`${PRODUCT_URL}/${id}`})  // kedaikira id
        })
    })
})
// finally export , after injection na , methods ah export pannannum, 
// use : use keyword is mandatory befor method name and method first letter should be in caps , then Finallay Query : query first letter should be in caps..
export const { useGetPruductsQuery , useGetPruductDetailsQuery} = productApiSlice;
// next by redux , we have to fetch : useGetPruductsQuery >> is for to display products , so need in Homescreen page.. 
// next by redux , we have to fetch : useGetPruductDetailsQuery >> is for to display productDetails , so need in productDetails page.