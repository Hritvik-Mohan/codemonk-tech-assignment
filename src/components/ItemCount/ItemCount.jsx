import './ItemCount.css'

export default function ItemCount() {
  return (
    <div className='item-count__container'>
      <button className='item-count__decrement'>-</button>
      <input className='item-count__input' type="number" />
      <button className='item-count__increment'>+</button>
    </div>
  )
}
