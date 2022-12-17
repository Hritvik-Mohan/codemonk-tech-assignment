import './CartNav.css'
import leftarrow from '../../assets/icon/left-arrow.png'
import radioCheck from '../../assets/icon/radio-check.png'
import radioUncheck from '../../assets/icon/radio-uncheck.png'

export default function CartNav() {
  return (
    <div className="cart-nav">
        <div className="container">
            {/* For desktops and tablets screens */}
            <div className='cart-nav__desktop-tab'>
                <div className='cart-nav__desktop-container'>
                    <div className='cart-nav__progress'>
                        <div><img src={radioCheck} alt="" /></div>
                        <span className='cart-nav__progress-bar_active'></span>
                        <div><img src={radioUncheck} alt="" /></div>
                        <span className='cart-nav__progress-bar_inactive'></span>
                        <div><img src={radioUncheck} alt="" /></div>
                    </div>
                </div>
                <div className='cart-nav__progress-labels'>
                    <div>Shopping Cart</div>
                    <div>Order Details</div>
                    <div>Make Payments</div>
                </div>
            </div>

            {/* For mobile screens */}
            <div className='cart-nav__mobile'>
                <a href=""><img src={leftarrow} alt="" srcSet="" /></a>
                <h2 className='cart-nav__mob-heading'>Shopping Cart</h2>
            </div>

        </div>
    </div>
  )
}
