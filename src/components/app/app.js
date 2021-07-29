import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'
import AppHeader from '../app-header'
import Footer from '../footer'
import MainPage from '../pages/main-page'
import AboutPage from '../pages/about-page'
import ShopPage from '../pages/shop-page'
import Cart from '../cart'


const App = () => {
    return (
        <div className = 'app'>
            <Router>
                <AppHeader/>
                <Route path='/' exact component={MainPage}/>
                <Route path='/about' exact component={AboutPage}/>
                <Route path='/shop' exact component={ShopPage}/>
                <Route path='/cart' exact component={Cart}/>
                <Footer/>
            </Router>
        </div>
        )
}

export default App;