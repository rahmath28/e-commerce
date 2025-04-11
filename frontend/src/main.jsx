
import { createRoot } from 'react-dom/client'
import './index.css'
import { // new version way , AllRoutes nu pannathu ithu ore maari than ...
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
  } from "react-router-dom"; // ithu ellame react router dom la irunthu than varuthu..
import App from './App.jsx'
import HomeScreen from "./pages/HomeScreen.jsx"
import CartScreen from "./pages/CartScreen.jsx"
import LoginScreen from "./pages/LoginScreen.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
// import products from "../product.js"; 


const router = createBrowserRouter( // router dra variable la create pandrom..
    createRoutesFromElements( // router kulla routes .., next route , route la initial ah ennoda root component "APP " than render aganum..
      // next , enakku initial  ah display agura page ku , index={true } nu pass pannanum..
      // next  namkku  thevatana elements ah render pannikkalam by providing path..

      // ProductDetails component la products na ennoda array data , frontend root la irukkurathu..atha pass pannirukken because na api vachu fetch pannala,
      // i need id , id destrucute pannanum na antha products enakku venum so imported here and passed it in ProductDetails component by props..

      <Route path="/" element={<App />}> 
        <Route path="/" index={true} element={<HomeScreen/>} />
        {/* intha index = true , enakku entha page initial ah render (display ) aganumo , athukku mattum index={true } pass pannanum.. */}

        <Route path="/product/:id" element={<ProductDetails />} />
        {/*  after created api path commented the import statement of old data , product.js from frontend root , and removed that in productdetails props ,  */}
        {/* because now im fetching by path.. not by that */}
        <Route path="/cart"  element={<CartScreen/>} />
        <Route path="/login"  element={<LoginScreen/>} />
        <Route path="*"  element={<PageNotFound/>} />
      </Route>
    )
  );
  

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}>
         <App/>

     </RouterProvider>

   

)
