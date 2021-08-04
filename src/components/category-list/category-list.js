import React, {Component}from 'react'
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {changeCategory} from '../../actions'
import {withRouter} from 'react-router-dom'


class CategoryList extends Component {

    changeCategory = (e)=> {
        const target = e.target
        this.props.changeCategory(target.parentNode.dataset.category)
        this.props.history.push(`/shop`)
    }

    render() {
        return (
            <div className="container py-5 category-box">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Категории товаров</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3" 
                        data-category = 'bouquet'
                        onClick = {(e) => this.changeCategory(e)}
                    >
                        <img src={`${process.env.PUBLIC_URL}img/c-1.jpg`} className="rounded-circle img-fluid border" alt=''/>
                        <h5 className="text-center mt-3 mb-3">Букеты</h5>
                        <button className="btn btn-success btn-cart-category">В магазин</button>
                    </div>
                    
                    <div className="col-12 col-md-4 p-5 mt-3"
                        data-category = 'boxes'
                        onClick = {(e) => this.changeCategory(e)}
                    >
                        <img src={`${process.env.PUBLIC_URL}img/c-2.jpg`} className="rounded-circle img-fluid border" alt=''/>
                        <h5 className="text-center mt-3 mb-3">Цветы в коробках</h5>
                        <button className="btn btn-success btn-cart-category">В магазин</button>
                    </div>
                    
                    <div className="col-12 col-md-4 p-5 mt-3"
                        data-category = 'presents'
                        onClick = {(e) => this.changeCategory(e)}
                    >
                        <img src={`${process.env.PUBLIC_URL}img/c-3.jpg`} className="rounded-circle img-fluid border" alt=''/>
                        <h2 className="h5 text-center mt-3 mb-3">Сладости и прочие</h2>
                        <button className="btn btn-success btn-cart-category">В магазин</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    changeCategory
}

export default withRouter(WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(CategoryList)));