import React from 'react'
// import QuantityCounter from '../QuantityCounter/QuantityCounter'
import './Card.css'
import {useNavigate} from 'react-router-dom'
import Button from '../ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, removeFromCart } from '../../Store/actions';

const Card = ({ label,img,name,price,id }) => {
    
    const store=useSelector((state)=>state)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleAddtoCart=(label)=>{
        if(label=="Add to Cart"){
        if(checkIncart())
        {
            console.log(checkIncart());
            return true
        }
        else{
            const currentItem=store.products.filter((product)=>product.id==id)
            dispatch({
                type:ADD_TO_CART,
                payload:currentItem
            })
            console.log(store)
            console.log(checkIncart());
            // checkIncart()
            return false
        }
    }
    else if(label=="Remove from Cart"){
        dispatch(
            removeFromCart(
              {id:id}))
              
    }
       
       
       

    }
    const checkIncart=()=>{
            const   isItemThreincart=store.cart.filter((item)=>{
                if(item.id===id)
            return item})
// console.log(isItemThreincart)
        return isItemThreincart.length?true:false;
    }
  return (
    <div className='card-box'>
        <div className='card-body'>
            <div className='card-img'>
                <img src={img}/>
            </div>
            <div className='card-item-name'>
                Name : {name}
            </div>
            <div className='card-item-price'>
            Price : $ {price}
            </div>
            {/* <QuantityCounter id={id}/> */}
            {/* <button className='product-details-btn' >More Details</button> */}
            <Button  label={label} onClick={()=>handleAddtoCart(label)}/>
        </div>
        
    </div>
  )
}

export default Card