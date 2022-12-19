import './Footer.css'
import '../HeaderBar/HeaderBar.css'
import phone from '../../assets/icon/phone.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="container">



                <div className="footer-mob">
                    <div className="footer-mob__links-section-1">
                        <span>Dummy</span>
                        <span className='links-divider'></span>
                        <span>Dummy</span>
                        <span className='links-divider'></span>
                        <span>Dummy</span>
                    </div>
                    <div className="footer-mob__links-section-2">
                        Lorem Ipsum is simply dummy text inting.
                    </div>
                </div>




                <div className="footer-tab">
                    <div className='footer-tab__section-1and2'>
                        <div className="footer-tab__section-1">
                            <div className='footer-tab__section-1-first-div'>
                                <h3>LOREM</h3>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                            </div>
                            <div className='footer-tab__section-1-second-div'>
                                <h3>LOREM</h3>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                            </div>
                        </div>
                        <div className="footer-tab__section-2">
                            <h3>CALL US</h3>
                            <p>monday-Friday Saturday & Sunday</p>
                            <p>8am to 9pm CST 10am to 6pm CST</p>
                            <p>
                                <img src={phone} alt="" />
                                <span>1800-123-1234</span>
                            </p>
                            <p>support.us@test.com</p>
                        </div>
                    </div>

                    <div className="footer-tab__section-3">
                        <div className="footer-tab__links-section-1">
                            <span>Dummy</span>
                            <span className='links-divider'></span>
                            <span>Dummy</span>
                            <span className='links-divider'></span>
                            <span>Dummy</span>
                            <span className='links-divider'></span>
                            <span>Dummy</span>
                        </div>
                        <div className="footer-tab__links-section-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>

                </div>


                <div className="footer-desktop">
                <div className='footer-tab__section-1and2'>
                        <div className="footer-tab__section-1">
                            <div className='footer-tab__section-1-first-div'>
                                <h3>LOREM</h3>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                            </div>
                            <div className='footer-tab__section-1-first-div'>
                                <h3>LOREM</h3>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                            </div>
                            <div className='footer-tab__section-1-first-div'>
                                <h3>LOREM</h3>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                            </div>
                            <div className='footer-tab__section-1-last-div'>
                                <h3>LOREM</h3>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                                <p>Dummy</p>
                            </div>
                        </div>
                        <div className="footer-tab__section-2">
                            <h3>CALL US</h3>
                            <p>monday-Friday Saturday & Sunday</p>
                            <p>8am to 9pm CST 10am to 6pm CST</p>
                            <p>
                                <img src={phone} alt="" />
                                <span>1800-123-1234</span>
                            </p>
                            <p>support.us@test.com</p>
                        </div>
                    </div>

                    <div className="footer-tab__section-3">
                        <div className="footer-tab__links-section-1">
                            <span>Dummy</span>
                            <span className='links-divider'></span>
                            <span>Dummy</span>
                            <span className='links-divider'></span>
                            <span>Dummy</span>
                            <span className='links-divider'></span>
                            <span>Dummy</span>
                        </div>
                        <div className="footer-tab__links-section-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
