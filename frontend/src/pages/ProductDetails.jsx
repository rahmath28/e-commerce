import { useParams, Link } from "react-router-dom";
import BackUpImg from "../assets/404.jpg";
import Rating from '../components/Rating';
import { useGetPruductDetailsQuery } from "../../slices/producApiSlice";

// na products which mean ennoda data va props ah pass panni inga destructure panni , logic develop pannirukken 

// javid bro , direct ah inga antha products which means my data va import panni , logic develop pannirukkaru..


const ProductDetails = () => { // now i dont need , to get destructure ..beacuase removed props , reason im fetching by url..

  const { id } = useParams(); // get id from URL

 // befor RTK QUERY : useparam hook use panni , id vachu , fetch url la id match pannai product get pannaom, then antha get panna product , 
 // state la update panni , nammakku thevayana detaiils ah destructure pannom...

 // AFTER RTK QUERY :
  // i will get that item by id..
  
  const {data:product, err, isLoading } =  useGetPruductDetailsQuery(id) // passed the id , which i got by useparams hook..
  // getting the data as product , because keela product dra variable la irunthu , thevaiyanatha , destructure panneerukkom...

  // RTK query use panna reason , err , isloading , state lam check panna vendiyathu illa.., athuve ellam paathukkum, 
  // we can directly destructure what we need..
  // inga enakku state la store pandra logic ah theva ilaa..

  // IMPORTANT NOTE : RTK QUERY USE PANNITALE , loading and err check pannanum..
 
  if (isLoading) return <p>Loading...</p>
  if(err) return <p>{err.message}</p> // WORKING SUCCESSFULLY AFTER , RTK QUERY...


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
