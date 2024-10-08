import React, { useContext } from 'react'
import {ContextValue} from "../Context/Context"

const Shop = () => {
  const {user}=useContext(ContextValue)
  return (
    <div>
        Welcome to Shop Page Mr. {user}


    </div>
  )
}

export default Shop