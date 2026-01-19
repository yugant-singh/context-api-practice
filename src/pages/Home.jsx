import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home'>
        <h1>This Is Home page</h1>
        <button onClick={()=>{
            navigate('/products')
        }}>Explore Our Products</button>
    </div>
  )
}

export default Home