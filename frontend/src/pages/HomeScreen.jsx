// HomeScreen.jsx
import Product from "../components/Product"; 

// why called product component na , antha product component map panni each product ah map panni , card nu oru component create panni athukku pass panni ,
// antha card component la theva yanatha destructure pani , daisy ui component vachu display pandra , 
// so intha home screen la atha call panna pothum , display agidum..

const HomeScreen = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mb-5">Our Products</h1>
      {/* product components called here.. */}
      <Product /> 
    </div>
  );
};

export default HomeScreen
