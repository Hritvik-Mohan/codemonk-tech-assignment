import './OrderSummary.css'
import '../DeliveryAvailability/DeliveryAvailability.css'

export default function OrderSummary(props) {

    // console.log(props.products.price)

  return (
    <section className='delivery-availability'>
    <div className="order-summary__container container">

        <h3 className='order-summary__heading'>Order Summary ({props.products.length} items)</h3>

        <div className="order-summary">
            <div className="order-summary__section order-summary__subtotal">
                <p>Subtotal</p>
                <p>{props.products.price} <span>$</span></p>
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

    </div>
    <div className="order-summary__grand-total container">
        <p className='order-summary__grand-total-text'>Grand Total</p>
        <p className='order-total'>Order Total</p>
        <p className='order-summary__grand-total-price'>42 998,00 <span>$</span></p>
    </div>
</section>
  )
}
