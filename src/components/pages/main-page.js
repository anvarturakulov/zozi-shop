import React from 'react'
import Slider from '../slider';
import CategoryProducts from '../category-products'
import FeaturedProducts from '../featured-products'
import Shop from '../shop'

const MainPage = () => {
    return (
        <div>
            <Slider/>
            <CategoryProducts/>
            {/* <FeaturedProducts/> */}
            <Shop/>
        </div>
    )
}

export default MainPage;