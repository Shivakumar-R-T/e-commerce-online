import React from 'react'

import './ProductList.css'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';
// import uniqid from 'uniqid';

const ProductList = () => {
  const store = useSelector((state) => state);
  // console.log(store)
  return (
    <div className='product-box'>
      <h1>All Items</h1>
      <div className='product-list'>
        {
          store?.products?.map((item) => {
            return <Card label={"Add to Cart"} name={item?.title} img={item?.images[0]} price={item?.price} id={item?.id} />
          })

        }
      </div>
    </div>
  )
}

export default ProductList