

import AllProducts from "../AllProducts/AllProducts";
import Carousel from "../Banner/Banner";

import { Category } from "../CategoryShowcases/Category";
import Details from "../Products/ProductDetalis/Detalis";



const Home = () => {
  return ( 
    <>
      <Carousel/>
      <AllProducts/>
    <Category/>
    <Details/>
    </>
   );
}
 
export default Home;