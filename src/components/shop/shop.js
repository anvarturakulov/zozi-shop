import React from 'react'
import CategoryPanel from '../category-panel/index.js'
import ProductPanel from '../product-panel'

const Shop = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <CategoryPanel/>
                <ProductPanel/>
            </div>
        </div>
    )
}

export default Shop;