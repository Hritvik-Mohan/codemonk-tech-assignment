import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount() {

  const [counter, setCounter] = useState(0);

  function decrement () {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  }

  function increment() {
    setCounter(count => count + 1);
  }

  function handleChange() {
    // console.log("handleChange")
  }

  return (
    <div className='item-count__container'>
      <button className='item-count__decrement' onClick={decrement}>-</button>
      <input
        type="number"
        name="quantity"
        value={counter}
        onChange={handleChange}
        className='item-count__input' 
      />
      <button className='item-count__increment' onClick={increment}>+</button>
    </div>
  )
}
