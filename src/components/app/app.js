import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'
import AppHeader from '../app-header'
import Footer from '../footer'
import MainPage from '../pages/main-page'
import AboutPage from '../pages/about-page'
import ShopPage from '../pages/shop-page'
import CartPage from '../pages/cart-page'
import ViewPage from '../view-page'


const App = () => {
    return (
        <div className = 'app'>
            <Router>
                <AppHeader/>
                <div className='content'>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/about' exact component={AboutPage}/>
                    <Route path='/shop/' exact component={ShopPage}/>
                    <Route path='/cart' exact component={CartPage}/>
                    <Route path='/flowers/:id/' render = {
                        ({match}) => {
                            const {id} = match.params
                            return <ViewPage itemId = {id}/>
                        }
                    }/>
                </div>
                <Footer/>
            </Router>
        </div>
        )
}

export default App;