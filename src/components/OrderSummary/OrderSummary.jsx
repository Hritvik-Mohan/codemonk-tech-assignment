import './OrderSummary.css'
import '../DeliveryAvailability/DeliveryAvailability.css'
import data from '../../data.json'
import { CartState } from '../../context/Context';
import { useEffect, useState } from 'react';

export default function OrderSummary(props) {

    const {
        state: { cartProducts, total },
        dispatch,
    } = CartState();


    // console.log(props)

    // console.log(data.discount)

  return (
    <section className='delivery-availability'>
    <div className="order-summary__container">

        <h3 className='order-summary__heading'>Order Summary ({props.products.length} items)</h3>

        <div className="order-summary">
            <div className="order-summary__section order-summary__subtotal">
                <p>Subtotal</p>
                <p>{props.products.length ? total.total : 0} <span>$</span></p>
            </div>

            <div className="order-summary__section order-summary__total-discount">
                <p>Total Discount</p>
                <p><span>- {props.products.length ? total.total * 0.1 : 0} $</span></p>
            </div>

            <div className="order-summary__section order-summary__standard-shipping">
                <p>Standart Shipping</p>
                <p>{props.products.length ? "Free" : "-"}</p>
            </div>
        </div>

    </div>
    <div className="order-summary__grand-total">
        <p className='order-summary__grand-total-text'>Grand Total</p>
        <p className='order-total'>Order Total</p>
        <p className='order-summary__grand-total-price'>{props.products.length ? total.total - total.total * 0.1 : 0 } <span>$</span></p>
    </div>
</section>
  )
}
