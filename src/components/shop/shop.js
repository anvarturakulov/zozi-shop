import React from 'react'

const Shop = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h5 className="pb-2">Категории</h5>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-2">
                               <button className="category-type active">Букеты</button>
                            </li>
                            <li className="pb-2">
                                <button className="category-type">Цветы в коробках</button>
                            </li>
                            <li className="pb-2">
                                <button className="category-type">Подарки и прочие</button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-9">
                        
                        <div className="row">
                            <div className='row'>
                                <div className="d-flex sort-box">
                                    <div>Сортировка</div>
                                    <select className="form-control">
                                        <option>По цене +</option>
                                        <option>По цене -</option>
                                        <option>По названию </option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={`${process.env.PUBLIC_URL}img/shop_04.jpg`} alt=''/>
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="prod-title">Букет №3</div>
                                        <div className="text-center mb-0 prod-price">700 000 сум</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 product-wap rounded-0">
                                    <div className="card rounded-0">
                                        <img className="card-img rounded-0 img-fluid" src={`${process.env.PUBLIC_URL}img/shop_04.jpg`} alt=''/>
                                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                            <ul className="list-unstyled">
                                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                                                <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="prod-title">Букет №3</div>
                                        <div className="text-center mb-0 prod-price">700 000 сум</div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabindex="-1">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop