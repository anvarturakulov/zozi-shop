import React from 'react'
import Slider from '../slider';
import CategoryList from '../category-list'
import Shop from '../shop'

const MainPage = () => {
    return (
        <div>
            <Slider/>
            <CategoryList/>
            <Shop/>
        </div>
    )
}

export default MainPage;