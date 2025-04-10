// HomeScreen.jsx
import Product from "../components/Product";

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
