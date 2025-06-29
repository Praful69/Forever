import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchProductData = () => {
      console.log('ProductId from URL:', productId);
      console.log('Products array:', products);
      console.log('Products length:', products.length);
      
      if (products.length > 0) {
        console.log('First product structure:', products[0]);
        console.log('Looking for product with _id:', productId);
      }
      
      const product = products.find((item) => {
        console.log('Comparing:', item._id, 'with', productId);
        return item._id === productId;
      });
      
      console.log('Found product:', product);
      
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
        console.log('Product data set successfully');
      } else {
        console.log('No product found');
      }
    };

    if (products && products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img 
                onClick={() => setImage(item)} 
                src={item} 
                key={index} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                alt="" 
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;