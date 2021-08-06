import React, {Component}from 'react'
import {connect} from 'react-redux';
import {deleteItemFromCart,deleteAllItemFromCart, incQtty, decQtty} from '../../../actions'
import './cart-list.css'

class CartList extends Component {

    render() {
        const {cartItems, deleteItemFromCart, deleteAllItemFromCart, incQtty, decQtty} = this.props
        const list = cartItems.map(item => {
                const {title, price, url, id, qtty, category} = item
                
            return (
                <div className='cart-item' key={id}>
                    <div className='cart-info-box'>
                        <img className='cart-item__img' src={`img/products/${category}/${url}`} alt='i'/>
                        <div className='cart-item__title'>{title}</div>
                    </div>
                    <div className='cart-cash-box'>
                        <div className='cart-item__price'>{price}</div>
                        <div className='cart-item__count-box'>
                            <div onClick = {()=> decQtty(id)}>
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            
                            <div className='cart-item__count'>{qtty}</div>
                            <i 
                                className="fas fa-chevron-right"
                                onClick = {()=> incQtty(id)}
                                ></i>
                        </div>
                        <div className='cart-item__total'>{price*qtty} сум</div>
                    </div>
                    <i 
                        className="fas fa-trash-alt trash-in-list"
                        onClick = {()=> deleteItemFromCart(id)}    
                        ></i>
                </div>
            )
        })


        return (
            <div className='cart-list'>
                <div className='cart-item cart-item-header'>
                    <div className='cart-item__text'>Вид</div>
                    <div className='cart-item__text'>Наименование</div>
                    <div className='cart-cash-box'>
                        <div className='cart-item__text'>Цена</div>
                        <div className='cart-item__text'>Кол-во</div>
                        <div className='cart-item__text cart-text-header'>Сумма</div>
                    </div>
                    <div className='cart-item-mobile-text'>Товар</div>
                    <i 
                        className="fas fa-trash-alt trash-in-list"
                        onClick = {()=> deleteAllItemFromCart()}
                        ></i>
                </div>
                {list}
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
    deleteItemFromCart,
    deleteAllItemFromCart,
    incQtty,
    decQtty
}

export default connect(mapStateToProps,mapDispatchToProps)(CartList);