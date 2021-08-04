import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
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
                        <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                        <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar