import React from 'react'
import { useState } from 'react'
  

export const Cart = () => {
    const [cartCount, setCartCount] = useState(0);
    const handleclick =() => setCartCount(cartCount + 1);

  return (
  <>
  
  <h1>Number Of items in tha cart {cartCount}</h1>
  <button onClick={handleclick}>Add to cart</button>


  </>
  )
}

