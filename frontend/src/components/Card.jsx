// downloaded one image to display , backup image if img not found from my data structure.., that backup image will display..
import { useEffect } from "react";
import BackUpImg from "../assets/404.jpg"
import Rating from "./Rating";
import {Link} from "react-router-dom"

const Card = ({ product }) => { // product destructured..

  // just title change panni display panneerukkom, react movie finder application la panna mari , but here in node la atha vida simple ah display panneeralam..
  useEffect(() => {
    document.title = "ecom/Products"
  })

  //  enakku thevayanatha destructure pandren..
  const { name, image, _id, description , rating , numReviews ,price } = product; // ratings holds star and numReviews means no of reviews from the product..

  // for backup image , image irukkanu condition use pandren , iruntha antha image , else my backup image will display..
  const imagePoster = image ? image : BackUpImg;

  // image illa , false nu pass panna perfect ah backup image work aguthu...
  // const imagePoster = false ? image : BackUpImg;

  return (
    <Link to={`/product/${_id}`}>
       <div className="card bg-base-100 w-full max-w-sm  shadow-sm mx-auto cols-2 md:cols-3"> 
        {/* removed w-96 */}
      <figure>
        <img src={imagePoster} className="h-[450px]"  alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="line-clamp-2">{description}</p>

        {/* Created rating as a componet  and called here., passed ratings and reviews in its props to display.. */}
        <Rating value={rating} text = {numReviews}/>
        {/* passed 'value' to display stars  and 'text' that is number of reviews.. , ican destructure it in rating component..*/}
        
        <p className="badge badge-primary">{price}</p>

        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
    </Link>
  )
}

export default Card