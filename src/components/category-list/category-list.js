import React from 'react'

const CategoryList = () => {
    return (
        <div className="container py-5 category-box">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Категории товаров</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src={`${process.env.PUBLIC_URL}img/c-1.jpg`} className="rounded-circle img-fluid border" /></a>
                    <h5 className="text-center mt-3 mb-3">Букеты</h5>
                    <p className="text-center"><a className="btn btn-success">В магазин</a></p>
                </div>
                
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src={`${process.env.PUBLIC_URL}img/c-2.jpg`} className="rounded-circle img-fluid border" /></a>
                    <h5 className="text-center mt-3 mb-3">Цветы в коробках</h5>
                    <p className="text-center"><a className="btn btn-success">В магазин</a></p>
                </div>
                
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src={`${process.env.PUBLIC_URL}img/c-3.jpg`} className="rounded-circle img-fluid border" /></a>
                    <h2 className="h5 text-center mt-3 mb-3">Сладости и прочие</h2>
                    <p className="text-center"><a className="btn btn-success">В магазин</a></p>
                </div>
            </div>
        </div>
    )
}

export default CategoryList