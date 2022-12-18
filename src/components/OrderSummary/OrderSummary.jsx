import './OrderSummary.css'
import '../DeliveryAvailability/DeliveryAvailability.css'

export default function OrderSummary() {
  return (
    <section className='delivery-availability'>
    <div className="delivery-availability__container container">

        <h3>Order Summary (xx items)</h3>

        <div className="order-summary">
            <div className="order-summary__section order-summary__subtotal">
                <p>Subtotal</p>
                <p>2500 <span>$</span></p>
            </div>

            <div className="order-summary__section order-summary__total-discount">
                <p>Total Discount</p>
                <p>-100 <span>$</span></p>
            </div>

            <div className="order-summary__section order-summary__standard-shipping">
                <p>Standart Shipping</p>
                <p>Free</p>
            </div>
        </div>

        <div className="order-summary__grand-total">
            <p>Grand Total</p>
            <p>42 998,00 <span>$</span></p>
        </div>

    </div>
</section>
  )
}
