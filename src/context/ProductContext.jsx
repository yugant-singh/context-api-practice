import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
 export const  ProductDataContext = createContext()
const ProductContext = (props) => {
   const [products, setProduct] = useState([])
    const getData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/')
        setProduct(response.data)

    }
   useEffect(function(){
     getData();
   },[])
    return (
        <div>
            <ProductDataContext.Provider value={products}>
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext