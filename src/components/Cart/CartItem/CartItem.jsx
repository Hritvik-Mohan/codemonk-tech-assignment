// import ItemCount from '../../ItemCount/ItemCount'
import DELETE from '../../../assets/icon/DELETE.png'
import './CartItem.css'
import { useState } from 'react';
import { CartState } from '../../../context/Context';

export default function CartItem({ product, price, subtotal, imageUrl, name, desc, id, handleDeleteItem, qty, getTotal }) {
    const {
        state: { cartProducts, total },
        dispatch,
    } = CartState();

    let subT = product.price * product.qty
    product.sub = subT;

    const [counter, setCounter] = useState(1);
    const [subtotals, setSubtotal] = useState(price);


    const subs = cartProducts.map((prod) => prod.sub)

    let sum = 0
    for(let i = 0; i < subs.length; i++) {
        sum = sum + subs[i];
    }
    total.total = sum;
    console.log(total.total)

    console.log(total.total * 0.1)


    function decrement() {
        if (counter > 1) {
            setCounter(count => count - 1);
            setSubtotal(subtotal => subtotal - price)
            product.qty--;
            dispatch({
                type: "DECREMENT_QTY"
            })
        }
    }

    function increment() {
        setCounter(count => count + 1);
        setSubtotal(subtotal => subtotal + price);
        product.qty++;
        dispatch({
            type: "INCREMENT_QTY"
        })
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
                                {product.sub} <span>$</span>
                            </p>
                        </div>
                    </div>
                    <div className="cart-item__quantity">
                        <div className='item-count__container'>
                            <button className='item-count__decrement' onClick={decrement}>-</button>
                            <input
                                type="number"
                                name="quantity"
                                value={product.qty}
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
                            value={product.qty}
                            onChange={handleChange}
                            className='item-count__input'
                        />
                        <button className='item-count__increment' onClick={increment}>+</button>
                    </div>
                </div>


                <div className="cart-item__subtotal desk">
                    <p>
                        {product.sub}
                    </p>
                    <span style={{padding:"0 0 0 0.3rem"}}> $</span>
                </div>
                <div className="cart-item__delete">
                    <img 
                        src={DELETE} 
                        alt=""
                        onClick={() => {
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: product
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
