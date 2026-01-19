import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetails = () => {
  const { id } = useParams()
  const productData = useContext(ProductDataContext)

  const selectedData = productData.find(
    (elem) => elem.id === Number(id)
  )
  console.log(selectedData);
  

  if (!selectedData) {
    return <h2>Loading...</h2>
  }

  return (
    <div className='card-details'>
      <img src={selectedData.image} alt={selectedData.title} />
      <h4>{selectedData.title}</h4>
      <h5>Price: {selectedData.price} $</h5>
      <h5>Rating: {selectedData.rating.rate}</h5>
      <p>{selectedData.
description
}</p>
    </div>
  )
}

export default ProductDetails
