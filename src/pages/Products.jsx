import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import {Link} from 'react-router-dom'
 
const Products = () => {
    
    const products = useContext(ProductDataContext)
    
  return (
    <div className='prod-lst'>
      {products.map(function(elem,idx){
        return <Link className='product' key={idx} to={`/products/${elem.id}`}><div className='card'>
          <img src= {elem.image} alt="" />
         <h4> {elem.title}</h4>
         
          </div></Link>
       
      })}
    </div>
  )
}

export default Products