import './Cart.css'
import data from '../../data.json'
import CartItem from './CartItem/CartItem'
import DeliveryAvailability from '../DeliveryAvailability/DeliveryAvailability';
import OrderSummary from '../OrderSummary/OrderSummary';
import ButtonType1 from '../Button/ButtonType1/ButtonType1';
import ButtonType2 from '../Button/ButtonType2/ButtonType2';
import { useEffect, useState } from 'react';
import { CartState } from '../../context/Context';

export default function Cart() {

    // const [products, setProducts] = useState([...data.products]);

    const {
        state: { cartProducts, total },
        dispatch,
    } = CartState();

    function handleDeleteItem(id) {
        const newCartItems = products.filter((product) => product.id !== id);
        setProducts(newCartItems)
        console.log(products)
    }

    function getSubtotal(subtotal) {
        return subtotal
    }

    let subtotal = getSubtotal();
    let isAva = false;

    function isAvailable(isAvailable) {
        isAva = isAvailable
        console.log(isAva)
    }

    let isEnable = {}

    let subTot = 0;

    function getTotal (total) {
        subTot = total
    }


    const cartItems = cartProducts.map(product => {
        
        return (
            <CartItem
                key={product.id}
                className="cart-item"
                product={product}
                name={product.name}
                price={product.price}
                subtotal={product.price * product.qty}
                imageUrl={product.image}
                desc={product.desc}
                id={product.id}
                qty={product.qty}
                handleDeleteItem={handleDeleteItem}
                getSubtotal={getSubtotal}
                getTotal={getTotal}
            />
        )
    })


    return (
        <>
            <h2 className="cart-heading container">Shopping Cart</h2>
            <section className="cart">
                <div className="container">
                    <div className="cart-container">
                        <div className="cart-header">
                            <div className="cart-product-header">
                                Product
                            </div>
                            {/* <div className='cart-price-qty-subtotal-container'> */}
                            <div className="cart-price-header">
                                Price
                            </div>
                            <div className="cart-quantity-header">
                                Quantity
                            </div>
                            <div className="cart-subtotal-header">
                                Subtotal
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="cart-items">
                            {cartItems}
                        </div>
                    </div>
                </div>
                <div className="delivery-order__container container">
                    <div>
                        <DeliveryAvailability isAvailable={isAvailable} />
                        <OrderSummary
                            products={cartProducts}
                            isAva={isAva}
                            subTot={total}
                        />
                    </div>
                    <div className="cart__checkout-container desktop">
                        <div>
                            <ButtonType1 className="cart__checkout-button-1" text="Checkout" isAva={isAva} />
                            <div>
                                <ButtonType2 className="cart__checkout-button-2" text="Continue Shopping" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cart__checkout-container container mob">
                    <ButtonType1 text="Checkout" isAva={isAva} />
                    <ButtonType2 text="Continue Shopping" />
                </div>
            </section>
        </>
    )
}
