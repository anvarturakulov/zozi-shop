import React from 'react'

const ProdItem = ({currentItem, itemId}) => {
    const {title, price, url, category} = currentItem;

    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={`${process.env.PUBLIC_URL}img/products/${category}/${url}`} alt={title}/>
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <div className="prod-title">{title}</div>
                    <div className="text-center mb-0 prod-price">{price} сум</div>
                </div>
            </div>
        </div>
    )
}

export default ProdItem