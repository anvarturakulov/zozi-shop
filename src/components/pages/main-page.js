import React from 'react'
import Slider from '../slider';
import CategoryProducts from '../categoryProducts'
import FeaturedProducts from '../featuredProducts'

const MainPage = () => {
    return (
        <div>
            <Slider/>
            <CategoryProducts/>
            <FeaturedProducts/>
        </div>
    )
}

export default MainPage;