import React, { useState } from 'react'
import ItemsList from './ItemsList'
import {products} from "./data"

const Items = () => {
    const [items, setItems] = useState(products)
  return (
    <div>
    <ItemsList
    products = {items}/>
    </div>
  )
}

export default Items