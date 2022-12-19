// import ItemCount from '../../ItemCount/ItemCount'
import DELETE from '../../../assets/icon/DELETE.png'
import './CartItem.css'
import { useState } from 'react';

export default function CartItem({ price, imageUrl, name, desc, id, handleDeleteItem }) {
    // console.log(props.product.price);

    // console.log(name)
    // console.log(id)

    const [counter, setCounter] = useState(0);
    const [subtotal, setSubtotal] = useState(price);

    const [currentSubtotal, setCurrentSubtotal] = useState(subtotal);

    // console.log(currentSubtotal)

    function decrement() {
        if (counter > 0 && subtotal > price) {
            setCounter(count => count - 1);
            setSubtotal(subtotal => subtotal - price)
        }
    }

    function increment() {
        setCounter(count => count + 1);
        setSubtotal(subtotal => subtotal + price);
        // setCurrentSubtotal(currentSubtotal => currentSubtotal.map({ 
        // }))
    }

    function handleChange() {
        // console.log("handleChange")
    }


    return (
        <div className='cart-item__container'>
            <div className="cart-item__image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="cart-item__details">
                <div className="cart-item__title-desc">
                    <h4 className='cart-item__title'>{name}</h4>
                    <div className="cart-item__desc-container">
                        <p className='cart-item__desc'>{desc}</p>
                    </div>
                </div>

                <div className='cart-item__item-count-flex mobile'>
                    <div>
                        <div className="cart-item__qty">
                            <span>Qty: 1</span>
                        </div>
                        <div className="cart-item__subtotal">
                            <p>
                                {subtotal} <span>$</span>
                            </p>
                        </div>
                    </div>
                    <div className="cart-item__quantity">
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
                    </div>
                </div>


                <div className="cart-item__qty desk">
                    <span>Qty: 1</span>
                </div>
                <div className="cart-item__price desk">
                    <p>
                        {price} <span>$</span>
                    </p>
                </div>
                <div className="cart-item__quantity desk">
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
                </div>


                <div className="cart-item__subtotal desk">
                    <p>
                        {subtotal} <span>$</span>
                    </p>
                </div>
                <div className="cart-item__delete">
                    <img 
                        src={DELETE} 
                        alt=""
                        onClick={()=> handleDeleteItem(id)} 
                    />
                </div>
            </div>
        </div>
    )
}
