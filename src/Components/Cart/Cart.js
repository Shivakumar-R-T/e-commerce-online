import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Clear_Cart } from '../../Store/actions';
import Card from '../Card/Card';
import Button from '../ui/Button/Button';
import './Cart.css'


const Cart = () => {
  const store = useSelector((state) => state);

  const [cartTotal,setcartTotal]=useState(0);
  console.log(store.cart)
  const dispatch = useDispatch();
  const placeitems = () => {
    dispatch({
      type: Clear_Cart,
    })
    setcartTotal(0)


    if(cartTotal!=0)
    alert("Items Placed Successfully");
    else{
      alert("No Item is there in Cart to Place !!");
    }
  }
 
  useEffect(()=> {

  const Sumtotal=store.cart.reduce(function(total,Item){
         return total+Item.price;
  },0)
  console.log(Sumtotal)

  setcartTotal(Sumtotal)
   },[store.cart])
  
  return (
    <div className='product-box'>
      <h1>Your Cart</h1>
      <div className='product-body'>
        {
          store.cart.length?<div className='product-list'>
          {
            store?.cart?.map((item) => {
              return <Card label='Remove from Cart' name={item?.title} img={item?.images[0]} price={item?.price} id={item?.id} />
            })

          }
        </div>:<h3>No items in Cart</h3>
        }
        
        <div className='order-btn'>
          <div className='total'> Total Amount : $ {cartTotal} </div>

          <Button label='Place Items' onClick={placeitems} />
          
        </div>


      </div>
    </div>
  )
}

export default Cart