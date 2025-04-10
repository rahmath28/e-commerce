import Card from "./Card";
import Products  from "../../product"; // ithu data structure maari , inga import panni map pandrom..

const Product = () => {

  return ( 
   <div className="flex flex-wrap justify-center  sm:jsutify-between gap-6  mx-auto">
     {Products.map((product) =>( // each item ah product nu get pandren.
        <Card key={product._id} product={product} /> // get panna each product ah card ku pass panniten in its props by a variable called "product", with key..
        // so  now i can destructure it.. , here id underscore la kudukka reason mangodb la id create agum pothu undersore nu than create agum so, namma array of data layum underscore id nu than irukku..
    ))}
   </div>
  )
}

export default Product