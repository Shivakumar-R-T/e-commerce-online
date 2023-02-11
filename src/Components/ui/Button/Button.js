import React from 'react'
import './Button.css'

const Button = ({label,onClick,disabled}) => {
  return (
    <div>
        <button className={`product-details-btn  ${disabled} `} disabled={disabled} onClick={onClick} >{label}</button>
    </div>
  )
}

export default Button