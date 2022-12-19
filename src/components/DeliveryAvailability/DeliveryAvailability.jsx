import './DeliveryAvailability.css';
import location from '../../assets/icon/LOCATION.png'
import ButtonType2 from '../Button/ButtonType2/ButtonType2';
import check from '../../assets/icon/check.png'

export default function DeliveryAvailability() {
  return (
    <section className='delivery-availability'>
        <div className="delivery-availability__container container">

            <h3 className='delivery-availability__heading'>Delivery Availability</h3>

            <div className="delivery-availability__input__container">
                <div>
                    <div className="delivery-availability__location-icon">
                        <img src={location} alt="" />
                    </div>
                    <div className="delivery-availability__input">
                        <input type="number" placeholder='PINCODE' />
                    </div>
                </div>
                <div className='delivery-availability__change-button-container'>
                    <ButtonType2 text="Change"/>
                </div>
            </div>

            <div className="delivery-availability__check-container">

                <div className="delivery-availability__check">
                    <div className="check">
                        <img src={check} alt="" />
                    </div>
                    <div className="delivery-availability__check-text">
                        Free delivery
                    </div>
                </div>

                <div className="delivery-availability__check">
                    <div className="check">
                        <img src={check} alt="" />
                    </div>
                    <div className="delivery-availability__check-text">
                        Cash on delivery
                    </div>
                </div>

                <div className="delivery-availability__check">
                    <div className="check">
                        <img src={check} alt="" />
                    </div>
                    <div className="delivery-availability__check-text">
                        Estimated delivery time iss 3-5 days
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
