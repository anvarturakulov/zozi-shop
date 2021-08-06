import React from 'react'
import './navbar.css'

const Navbar = ({scrolling}) => {
    let classNavBar = "navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
   
    if (scrolling) {
        classNavBar += ' not-visible-navbar nv'
    }

    return (
        <nav className={classNavBar} id="templatemo_nav_top">
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div className='header-links'>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">О нас</a>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Доставка</a>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Оплата</a>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Гарантии</a>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Корпоративные продажи</a>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Контакты</a>
                    </div>
                    
                    <div>
                        <a className="text-light" href="#" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="#" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="#" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar