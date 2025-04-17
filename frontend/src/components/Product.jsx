import { useGetPruductsQuery } from "../../slices/producApiSlice";
import Card from "./Card";



// after redux i dont need , axios way of fetching and states..




// inga than frontend root product.js irukku : which mean front end la iruntha data ..

// so i have to import the backend data here ..
const Product = () => {

  // RTK query use panna reason , err , isloading , state lam check panna vendiyathu illa.., athuve ellam paathukkum, 
  // we can directly destructure what we need..
  // inga enakku state la store pandra logic ah theva ilaa..

  // IMPORTANT NOTE : RTK QUERY USE PANNITALE , loading and err check pannanum..


  const {data:products , err , isLoading} = useGetPruductsQuery() // now after used slice logics , fetched by this method..
  // getting data as products

  if (isLoading) return <p>Loading...</p>
  if(err) return <p>{err.message}</p> // WORKING SUCCESSFULLY AFTER , RTK QUERY...

  return ( 
   <div className="flex flex-wrap justify-center  sm:jsutify-between gap-6  mx-auto">
    
     {products.map((product) =>( // each item ah product nu get pandren.

        <Card key={product._id} product={product} /> // get panna each product ah card ku pass panniten in its props by a variable called "product", with key..
 
    ))}
   </div>
  )
}

export default Product