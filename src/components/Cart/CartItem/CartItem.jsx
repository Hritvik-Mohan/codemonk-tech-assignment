// import ItemCount from '../../ItemCount/ItemCount'
import DELETE from '../../../assets/icon/DELETE.png'
import './CartItem.css'
import { useState } from 'react';
import OrderSummary from '../../OrderSummary/OrderSummary';
import { useEffect } from 'react';
import { CartState } from '../../../context/Context';

export default function CartItem({ product, price, subtotal, imageUrl, name, desc, id, handleDeleteItem, qty, getTotal }) {
    // console.log(props.product.price);

    // console.log(name)
    // console.log(id)

    const {
        state: { cartProducts, total },
        dispatch,
    } = CartState();
    // console.log(cartProducts)

    // console.log(subtotal)

    let subT = product.price * product.qty
    product.sub = subT;

    // console.log(subT)

    const [counter, setCounter] = useState(1);
    const [subtotals, setSubtotal] = useState(price);

    // console.log(cartProducts.qty)

    // qty = counter;

    // const [allSubtotal, setAllSubtotal] = useState([])

    // console.log(subtotal.length)

    // useEffect((subtotal) => {
    //     console.log([subtotal])        
    // }, [subtotal])

    // console.log(Object.keys(subtotal));
    // getSubtotal(subtotal);

    // useEffect(() => {
    //     let sum = 0;
    //     // for(let i = 0; i )
    //     // console.log(subtotal)

    //     let total_price = subtotal.reduce(() => {

    //     }, 0)
    // }, [subtotal])
    
    // console.log(subtotal)


    // const initialValue = 0;
    // const total = data.reduce((accumulator,current) => accumulator + current.aprice, initialValue)

    const subs = cartProducts.map((prod) => prod.sub)
    // console.log(subs)
    // const [total, setTotal] = useState();
    // useEffect(() => {
    //   return () => {
    //     setTotal(subs.reduce((acc, curr) => acc + curr.sub , 0))
    //   }
    // },[CartItem])
    // console.log(total)

    let sum = 0
    for(let i = 0; i < subs.length; i++) {
        sum = sum + subs[i];
    }
    // console.log(sum)
    total.total = sum;
    console.log(total.total)

    console.log(total.total * 0.1)



    const [currentSubtotal, setCurrentSubtotal] = useState(subtotal);

    // console.log(currentSubtotal)

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

        // setCurrentSubtotal(currentSubtotal => currentSubtotal.map({ 
        // }))
    }

    function handleChange() {
        // console.log("handleChange")
    }

    // console.log(subtotal)




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
