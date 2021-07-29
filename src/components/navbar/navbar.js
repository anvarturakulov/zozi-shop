import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div class="container text-light">
                <div class="w-100 d-flex justify-content-between">
                    <div className='header-links'>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">О нас</a>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Доставка</a>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Оплата</a>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Гарантии</a>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Корпоративные продажи</a>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">Контакты</a>
                    </div>
                    
                    <div>
                        <a class="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a class="text-light" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                        <a class="text-light" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                        <a class="text-light" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar