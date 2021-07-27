import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'
import AppHeader from '../app-header'
import Footer from '../footer'
import MainPage from '../mainPage'
import AboutPage from '../aboutPage'
import ShopPage from '../shopPage'
import Cart from '../cart'
import ContactPage from '../contactPage'


const App = () => {
    return (
        <div className = 'app'>
            <Router>
                <AppHeader/>
                <Route path='/' exact component={MainPage}/>
                <Route path='/about' exact component={AboutPage}/>
                <Route path='/shop' exact component={ShopPage}/>
                <Route path='/cart' exact component={Cart}/>
                <Route path='/contact' exact component={ContactPage}/>
                <Footer/>
            </Router>
        </div>
        )
}

export default App;