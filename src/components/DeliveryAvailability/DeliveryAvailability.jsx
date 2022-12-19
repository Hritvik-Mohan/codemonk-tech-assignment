import './DeliveryAvailability.css';
import location from '../../assets/icon/LOCATION.png'
import ButtonType2 from '../Button/ButtonType2/ButtonType2';
import check from '../../assets/icon/check.png'
import cross from '../../assets/icon/cross.png'
import data from '../../data.json'
import { useState } from 'react';

export default function DeliveryAvailability( { isAvailable } ) {

    const [availability, setAvailability] = useState({
        pincode: "",
    })

    const pincodes = Object.keys(data.pincode)
    // console.log(pincodes)
    // console.log(data.pincode)

    function handleChange(event) {
        const {name, value} = event.target
        setAvailability(availability => ({
            ...availability,
            [name]: value
        }))

    }
    // console.log(availability)


    let isFreeDelivery = false;
    let isCOD = false;
    let minEstimateDays = 0;
    let maxEstimateDays = 0;

    if(availability.pincode == pincodes[0]) {

        isAvailable(true)

        let deliveryPrice = data.pincode["560066"].deliveryPrice;
        if(deliveryPrice == 0) { isFreeDelivery = true; } 

        minEstimateDays = data.pincode["560066"].estimatedDays.min;
        maxEstimateDays = data.pincode["560066"].estimatedDays.max;

        isCOD = data.pincode["560066"].cashOnDelivery;

    }

    if(availability.pincode == pincodes[1]) {

        isAvailable(true)

        let deliveryPrice = data.pincode["560067"].deliveryPrice;
        if(deliveryPrice == 0) { isFreeDelivery = true; } 

        minEstimateDays = data.pincode["560067"].estimatedDays.min;
        maxEstimateDays = data.pincode["560067"].estimatedDays.max;

        isCOD = data.pincode["560067"].cashOnDelivery;

    }

    if(availability.pincode == pincodes[2]) {

        isAvailable(true)

        let deliveryPrice = data.pincode["560068"].deliveryPrice;
        if(deliveryPrice == 0) { isFreeDelivery = true; } 

        minEstimateDays = data.pincode["560068"].estimatedDays.min;
        maxEstimateDays = data.pincode["560068"].estimatedDays.max;

        isCOD = data.pincode["560068"].cashOnDelivery;

    }

    // isAvailable(false)


    return (
        <section className='delivery-availability'>
            <div className="delivery-availability__container">

                <h3 className='delivery-availability__heading'>Delivery Availability</h3>

                <div className="delivery-availability__input__container">
                    <div>
                        <div className="delivery-availability__location-icon">
                            <img src={location} alt="" />
                        </div>
                        <div className="delivery-availability__input">
                            <input 
                                type="number" 
                                placeholder='PINCODE'
                                name="pincode"
                                value={availability.pincode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='delivery-availability__change-button-container'>
                        <ButtonType2 text="Change" />
                    </div>
                </div>

                <div className="delivery-availability__check-container">

                    <div className="delivery-availability__check">
                        <div className="check">
                            { isFreeDelivery ? <img src={check} alt="" /> : <img src={cross} alt=""/>}
                        </div>
                        <div className="delivery-availability__check-text">
                            Free delivery
                        </div>
                    </div>

                    <div className="delivery-availability__check">
                        <div className="check">
                            { isCOD ? <img src={check} alt="" /> : <img src={cross} alt=""/>}
                        </div>
                        <div className="delivery-availability__check-text">
                            Cash on delivery
                        </div>
                    </div>

                    <div className="delivery-availability__check">
                        <div className="check">
                            { minEstimateDays || maxEstimateDays ? <img src={check} alt="" /> : <img src={cross} alt=""/>}
                        </div>
                        <div className="delivery-availability__check-text">
                            Estimated delivery time iss {minEstimateDays}-{maxEstimateDays} days
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
