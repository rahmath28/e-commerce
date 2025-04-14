import { useEffect, useState } from "react";
import Card from "./Card";
// import Products  from "../../product"; // ithu data structure maari  frontend root odathu , inga import panni map pandrom..

import axios from "axios";


// inga than frontend root product.js irukku : which mean front end la iruntha data ..

// so i have to import the backend data here ..
const Product = () => {

  const [products, setProducts] = useState([])


  //useEffect to fetch data by new create backend api 
  useEffect(() =>{

    const fetchProducts = async() => {
      const {data} = await axios.get("http://localhost:5000/api/products")

      console.log(data) // got data : {data: Array(6), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …} >> intha object la data dra oru property irukku athulathan enakku data irukku.. 
      // kedacha data kulla , iinoru data la array of object thet is my products irukku..  so next update the data i got in my state..
      setProducts(data)//  ippadiyum podalam :setProducts(data.data) , illa direct ah na fetch pandra edathulaiye destructure pannikkalam..
    }
    fetchProducts()

  },[]) // remember , dont forgot the dependency

  return ( 
   <div className="flex flex-wrap justify-center  sm:jsutify-between gap-6  mx-auto">
    
    {/* before fetching data from api , mapped by Product component , ( check before fetch la : caps "P" IRUKKUM PRODUCT KU , en na athu component)  */} 
    {/* ex :  {Products.map((product) =>( */}
    
    {/* after fetch , i updated the data i got in my state called product , and now rendering based on it.. ( check after fetch la : small "p" IRUKKUM PRODUCT KU , en na athu state na create pannathu..) */}
     {products.map((product) =>( // each item ah product nu get pandren.

      // i thinks na map pannatha card componenet ku pass panni ,  card ah get pandren pandren ,
      // NW INTHA COMPONENT AH CALL PANNA POTHUM.. I WILL GET THE card la get pannathau display agum..
      //  but javid bro display it like , direct ah HOMESCREEN component ku pass panni athu ulla card ah display pandraru..
        <Card key={product._id} product={product} /> // get panna each product ah card ku pass panniten in its props by a variable called "product", with key..
        // so  now i can destructure it.. , here id underscore la kudukka reason mangodb la id create agum pothu undersore nu than create agum so, namma array of data layum underscore id nu than irukku..
    ))}
   </div>
  )
}

export default Product