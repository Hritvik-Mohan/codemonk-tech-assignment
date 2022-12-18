import './Cart.css'
import data from '../../data.json'
import CartItem from './CartItem/CartItem'
import DeliveryAvailability from '../DeliveryAvailability/DeliveryAvailability';
import OrderSummary from '../OrderSummary/OrderSummary';
import ButtonType1 from '../Button/ButtonType1/ButtonType1';
import ButtonType2 from '../Button/ButtonType2/ButtonType2';

export default function Cart() {

    // console.log(data)

    const products = data.products;

    const cartItems = products.map(product => {
        return (
          <div>
            <CartItem className="" product={product}/>
          </div>
        )
      })

  return (
    <section className="cart">
        <div className="container">
            <h2 className="cart-heading">Shopping Cart</h2>

            <div className="cart-container">
                <div className="cart-header">
                    <div className="cart-product-header">
                        Product
                    </div>
                    <div className='cart-price-qty-subtotal-container'>
                        <div className="cart-price-header">
                            Price
                        </div>
                        <div className="cart-quantity-header">
                            Quantity
                        </div>
                        <div className="cart-subtotal-header">
                            Subtotal
                        </div>
                    </div>
                </div>
                <div className="cart-items">
                    {cartItems}
                </div>
            </div>
        </div>
        <DeliveryAvailability />
        <OrderSummary />
        <div className="cart__checkout-container container">
            <ButtonType1 text="Checkout"/>
            <ButtonType2 text="Continue Shopping"/>
        </div>
    </section>
  )
}
