import React, {Component}from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.css'

class Header extends Component {

    render() {
        const {cartItems} = this.props
        let count = cartItems.reduce((total, item) => {
            return total + item.qtty
        }, 0)

        
        return (
            <nav className="navbar navbar-expand-lg navbar-light shadow menu_panel ">
                <div className="container d-flex justify-content-between align-items-center">
    
                    <Link className="navbar-brand text-success logo h2 align-self-center" to="/">
                        Zozi Gullari 
                    </Link>
    
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Главная</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Магазин</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Цветочная подписка</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a>
                            <Link to='/cart' className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{count}</span>
                            </Link>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);
