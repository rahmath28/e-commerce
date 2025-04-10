import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// FaStar >> fully colored , FaStarHalfAlt >> half coloured , FaRegStar >> fully without colored..

const Rating = ({ value, text }) => {
    // 'value' means star : to display stars  and 'text' : that is number of reviews.. , destructured it from props 
    return (
        // created ratings as a component because , i am going to display the ratings in 5 stars with span , 
        // each span will display each star..
        <div className="flex gap-8 my-3">
            <div className='flex items-center gap-1'>

                <span>{value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>

                <span>{value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>

                <span>{value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>

                <span>{value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>

                <span>{value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>

            </div>
            <div>
            <p>{`Reviews : ${text ? text : null}`}</p>
            {/* no user review review kuduthu iruntha antha user count display agum , illa na ethum display agathu..  */}
            </div>
        </div>
    )

    // final note for understanding : 
    // value : means my ratings.
    // value ( ratings ) greater than 1, 2, 3, 4, 5 na fullstar full star coloured ah display agum...
    // value ( ratings ) greater than  0.5, 1.5, 2.5, 3.5, 4.5 na halfstar than  coloured ah display agum...
    // value ( ratings )  lesser than 0.5, 1.5, 2.5, 3.5, 4.5 na fullstar fullstar colour illama display agum...

    // if example : ratings " 3.8 " na , 1 st span la condition check pannum , value 1 ah vida greater ah irukku so first span la irunthu fullstar display agum,
    // next 2nd span condition check pannum , 2 vida greater so full star display pannu , aduthu 3rd span condition check pannum , 3 vida greater so full star print agum, 
    // next  4th span condition check pannum , 4 ah vida greater ah nu pakkum , illa ana 3.5 vida greater so , half star display agum ,
    // next 5th span condition check pannum , 5 vida greater ah illa, adutha condition 4.5 vida greater ah illa , so last condition la irukkka empty star display..

    // this is how it works.. , flexed each star to display in horizontally..
}

export default Rating