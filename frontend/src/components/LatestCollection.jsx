import { useEffect, useState, useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import ProductItem from "./ProductItem"  // Changed: removed { } - default import
import Title from "./Title"              // Changed: removed { } - default import

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quis, assumenda quae veniam accusantium suscipit architecto perferendis tempore voluptas sit. Amet quas quo debitis sed placeat deserunt cupiditate, saepe omnis!
        </p>
      </div>
      {/*Rendering latest products*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection