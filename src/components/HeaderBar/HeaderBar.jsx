import search from '../../assets/icon/search.png';
import user from '../../assets/icon/user.png'
import cart from '../../assets/icon/shopping.png'
import logo from '../../assets/Images/logo.png'
import './HeaderBar.css'

export default function HeaderBar() {
  return (
    <header className='header'>
      <div className='header-container container'>
        <div className="logo">
          <img src={logo} alt="" srcSet="" />
        </div>
        <div className="links-container">
          <ul className="links">
            <li className='links__track-order'>
                Track Order
            </li>
            <span className='links-divider first-divider'></span>
            <li>
              <a href="">
                <img src={search} alt="" />
              </a>
            </li>
            <span className='links-divider'></span>
            <li>
              <a href="">
                <img src={user} alt="" />
              </a>
            </li>
            <span className='links-divider'></span>
            <li>
              <a href="">
                <img src={cart} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
