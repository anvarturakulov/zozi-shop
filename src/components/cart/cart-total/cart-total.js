import React, {Component}from 'react'
import './cart-total.css'
import {connect} from 'react-redux';

class CartTotal extends Component {
    render() {

        const {cartItems} = this.props
        let total = cartItems.reduce((total, item) => {
            return total + item.qtty*item.price
        }, 0)

        return (
            <div className='cart-total'>
                <div className='cart-total-box'>
                    <div className='total-box'>
                        <div className='total-text'>Сумма</div>
                        <div className='total-count'>{total} сум</div>
                    </div>
                    <div className='total-box'>
                        <div className='total-text'>Доставка</div>
                        <div className='total-count'>0 сум</div>
                    </div>
                    <div className='total-box total-box__footer'>
                        <div className='total-text total-text__footer'>Итого</div>
                        <div className='total-count total-count__footer'>{total} сум</div>
                    </div>
                    <div>
                        <button className="btn btn-success btn-total">Оформить заказ</button>
                    </div>
                    <div className='offer-text'>
                        Оформляя заказ вы соглашаетесьс условиями
                        <a> условиями оферты</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        cartItems : state.cart,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(CartTotal);