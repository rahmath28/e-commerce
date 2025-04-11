import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BackUpImg from "../assets/404.jpg";
import Rating from '../components/Rating';
import axios from "axios";

// na products which mean ennoda data va props ah pass panni inga destructure panni , logic develop pannirukken 

// javid bro , direct ah inga antha products which means my data va import panni , logic develop pannirukkaru..


const ProductDetails = () => { // now i dont need , to get destructure ..beacuase removed props , reason im fetching by url..

  const { id } = useParams(); // get id from URL

  const [product, setProduct] = useState({}); // initial ah empty object , because object  than get panna porom

  // hook use panni , props la pass panna product ah destructure panni , find method use pandren en na, na click panna id yum , products la irukka entha product id match agutho  ,
  // atha na vachurukka state la update pandren..

  // after , crreated api path for product details page by id in server , fetching by the path i created..

  useEffect(() => {
    // const foundProduct = products.find((item) => item._id === id); // intha line inga theva illa because , na server la ye find panniten ennoda product ah..

    const fetchProductDetails = async() => {

      const {data} = await axios.get(` http://localhost:5000/api/products/${id} `) // url ennoda endpoint oda kukkanum , atha mistake panniten while practice..  : `/api/products/:${id}` (path endpoint illama kuduthuteen , without loaclhost and http)
      // this is my endpoint url : http://localhost:5000/api/products/5 , by api created .
      // console.log(data) // intha mari kedaikithu , ithula data nu oru , object irukku athulathan ennoda data irukku  {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
      // i am directly destructuring the data whil i fetch.., with curly braces.. ( const {data}  : itha soldrathu..)
      setProduct(data)
    }
    fetchProductDetails()
    // setProduct(foundProduct);
  }, [id, product ]); // based on id it render.., dependency la why products >> products props la irunthu than varuthu.., 
  // intha jook based on condition onetime than run agum , re run agathu.., if sometime products kedaika time achuna, hook run agiduchuna , dtata not found nu error adikkum..


  // read this if you have confusion of products in dependency : 

  // ✅ Why products is in the useEffect dependency:
  // products is a prop passed from the parent.
  // It may update after the component first renders (especially if fetched from API).
  // Including it ensures useEffect runs again when products gets updated.
  // Without it, the component may not find the product if products was initially empty.
  // So, [id, products] ensures that the product is correctly found whenever the id or products change.

  if (!product) {
    return <p className="text-center">Product not found...</p>;
  }

  // all destructured values here are from the updated state (product), not from props., na get panna object ah state la update pannom , athula irunthuthan destructure pandrom..

  // now this all destructure from the stae after fetch..
  const { name, image, description, rating, numReviews, price, countInStock } = product;
  const imagePoster = image ? image : BackUpImg;
  


  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <img src={imagePoster} alt={name} className="w-full md:w-1/2 h-[400px] object-cover rounded" />
        <div className="space-y-4 items-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p>{description}</p>
          <Rating value={rating} text={numReviews} />
          <p className="text-xl font-semibold text-primary">₹{price}</p>

          {/* stock irukka illaiyanu kamikkanum.., iruntha irukkuratha kamikkuren illana " no staocks available nu display pandren..." */}
          <p>{countInStock > 0 ? `Stocks Available : ${countInStock}` : 'No stocks Available'}</p>

          {/* stock quantity iruntha , items ethuna venumnu select pandrom.. */}

          {/* onnum illa countInstocks > 0  na atha form la select fild vachu irukka quantity ah display panni evlo venumo , select panna soldrom.. */}
          {
            countInStock > 0 && (
            <div>
              <h4 className="my-2">Select quantity :</h4>
              <form>
                <select defaultValue="Add items" className="select">
               {/* [...Array().keys()] >> by this nammalala number ah array va convert panna mudiyum there also index starts from 0, na intha Array(5) pass panna , i will get 0 to 4 , beacuse index starts from 0.*/}
               {/*  */}
                {
                  [...Array(countInStock).keys()].map((item) =>(
                    <option key={item }> {item +1}</option>
                    // array nala index starts from 0 , item quantity and index same ah irukkanum , so +1 , item quantity : 0(zero) la start aga kudathu , so +1 na i will get 1 , so now the quantity starts from 1..
                  ))
                }
                 
                </select>
              </form>
            </div>
            )}

          <div className="card-action">
            <button disabled={countInStock === 0} className="btn btn-accent">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
