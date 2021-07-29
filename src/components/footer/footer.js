import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-dark" id="tempaltemo_footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-success border-bottom pb-3 border-light logo">Nozi</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li>
                                    <i class="fas fa-map-marker-alt fa-fw"></i>
                                    123 Consectetur at ligula 10660
                                </li>
                                <li>
                                    <i class="fa fa-phone fa-fw"></i>
                                    <a class="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                                </li>
                                <li>
                                    <i class="fa fa-envelope fa-fw"></i>
                                    <a class="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-light border-bottom pb-3 border-light">Категории</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li><a class="text-decoration-none" href="#">Букеты</a></li>
                                <li><a class="text-decoration-none" href="#">Цветы в коробках</a></li>
                                <li><a class="text-decoration-none" href="#">Сладости и прочие</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-light border-bottom pb-3 border-light">Информация</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li><a class="text-decoration-none" href="#">О нас</a></li>  
                                <li><a class="text-decoration-none" href="#">Доставка</a></li>
                                <li><a class="text-decoration-none" href="#">Оплата</a></li>
                                <li><a class="text-decoration-none" href="#">Гарантии</a></li>
                                <li><a class="text-decoration-none" href="#">Корпоративные продажи</a></li>
                                <li><a class="text-decoration-none" href="#">Политики конфиденциальности</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="row text-light mb-4">
                        <div class="col-12 mb-3">
                            <div class="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div class="col-auto me-auto">
                            <ul class="list-inline text-left footer-icons">
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-auto">
                            <label class="sr-only" for="subscribeEmail">Email address</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                                <div class="input-group-text btn-success text-light">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-100 bg-black py-2">
                    <div class="container">
                        <div class="row pt-3">
                            <div class="col-12">
                                <p class="text-left text-light">
                                    Copyright &copy; Nozi.uz 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer