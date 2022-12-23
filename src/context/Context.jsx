import { createContext, useContext, useReducer, useState } from "react"
import { cartReducer } from "./Reducers"
import data from '../data.json'

const Cart = createContext()

const Context = ({ children }) => {
  const products = [...data.products].map((prod) => ({
    id: prod.id,
    name: prod.name,
    price: prod.price,
    image: prod.imageUrl,
    description: prod.desc,
    qty: 1,
    sub: prod.price,
  }))

  const total = {
    total: 0
  }

  const [state, dispatch] = useReducer(cartReducer, {
    cartProducts: products,
    total: total
  }); 

  return <Cart.Provider value = {{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}