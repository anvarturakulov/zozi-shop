import React from 'react'

const CategoryPanel = () => {
    return (
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
    )
}

export default CategoryPanel