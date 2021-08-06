import React from 'react'
import CartList from '../cart/cart-list'
import CartTotal from '../cart/cart-total'
import CartInfo from '../cart/cart-info'


const CartPage = () => {
    return (
        <div className='container py-5'>
            <h2>Корзина</h2>
            <div className='cart-box'>
                <CartList/>
                <CartTotal/>
            </div>
            <CartInfo/>
        </div>
    )
}

export default CartPage;