import ItemCount from '../../ItemCount/ItemCount'
import DELETE from '../../../assets/icon/DELETE.png'
import './CartItem.css'

export default function CartItem(props) {
    console.log(props)
    return (
        <div className='cart-item__container'>
            <div className="cart-item__image-container">
                <img src={props.product.imageUrl} alt="" />
            </div>
            <div className="cart-item__details">
                <div className="cart-item__title-desc">
                    <h4 className='cart-item__title'>{props.product.name}</h4>
                    <div className="cart-item__desc-container">
                        <p className='cart-item__desc'>{props.product.desc}</p>
                    </div>
                </div>

                <div className='cart-item__item-count-flex mobile'>
                    <div>
                        <div className="cart-item__qty">
                            <span>Qty: 1</span>
                        </div>
                        <div className="cart-item__subtotal">
                            <p>
                                {props.product.price} <span>$</span>
                            </p>
                        </div>
                    </div>
                    <div className="cart-item__quantity">
                        <ItemCount />
                    </div>
                </div>


                <div className="cart-item__qty desk">
                    <span>Qty: 1</span>
                </div>
                <div className="cart-item__price desk">
                    <p>
                        {props.product.price} <span>$</span>
                    </p>
                </div>
                <div className="cart-item__quantity desk">
                    <ItemCount />
                </div>


                <div className="cart-item__subtotal desk">
                    <p>
                        {props.product.price} <span>$</span>
                    </p>
                </div>
                <div className="cart-item__delete">
                    <img src={DELETE} alt="" />
                </div>
            </div>
        </div>
    )
}
