import React, {Component} from 'react'
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {listLoaded, listRequested, listError, addItemToCart} from '../../actions'
import Error from '../error'
import Spinner from '../spinner'
import {withRouter} from 'react-router-dom'

class ViewPage extends Component {
    
    componentDidMount() {
        this.props.listRequested();
        const {RestoService} = this.props;
        RestoService.getListItems()
            .then(res => this.props.listLoaded(res))
            .catch(() => this.props.listError())
    }

    render() {
        
        const {prodItems, loading, error, itemId, addItemToCart} = this.props;

        if (loading) return <Spinner/> 
        if (error)   return <Error/>
        
        let currentItem = prodItems.find(item => {
            return item.id === +itemId
        })
        
        let title, url, category, price;

        if (currentItem) {
            title = currentItem.title
            url = currentItem.url
            category = currentItem.category
            price = currentItem.price
        }

        return(
                <div className="bg-light">
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-lg-5 mt-5">
                                <div className="card mb-3">
                                    <img className="card-img" src={`img/products/${category}/${url}`} alt={title}/>
                                </div>
                            </div>  
                            <div className="col-lg-7 mt-5">
                                <div className="card card-padding">
                                    <div className="card-body ">
                                        <h1 className="h2">{title}</h1>
                                        <p className="h3 py-2">${price}</p>
                                        
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <h6>Brand:</h6>
                                            </li>
                                            <li className="list-inline-item">
                                                <p className="text-muted"><strong>Easy Wear</strong></p>
                                            </li>
                                        </ul>

                                        <h6>Description:</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <h6>Avaliable Color :</h6>
                                            </li>
                                            <li className="list-inline-item">
                                                <p className="text-muted"><strong>White / Black</strong></p>
                                            </li>
                                        </ul>

                                        <h6>Specification:</h6>
                                        <ul className="list-unstyled pb-3">
                                            <li>Lorem ipsum dolor sit</li>
                                            <li>Amet, consectetur</li>
                                            <li>Adipiscing elit,set</li>
                                            <li>Duis aute irure</li>
                                            <li>Ut enim ad minim</li>
                                            <li>Dolore magna aliqua</li>
                                            <li>Excepteur sint</li>
                                        </ul>
                                        
                                        <div className='d-flex btns-view-card'>
                                            <button 
                                                className="btn btn-secondary"
                                                onClick = {() => 
                                                    this.props.history.push(`/shop`)
                                                }
                                                >В магазин</button>
                                            <button 
                                                className="btn btn-success"
                                                onClick = {() => addItemToCart(+itemId)}
                                                >Добавит в корзину</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        prodItems:state.list,
        loading : state.loading,
        error : state.error,
        cartItems : state.cart,
        currentCategory : state.currentCategory
    }
}

const mapDispatchToProps = {
    listLoaded,
    listRequested,
    listError,
    addItemToCart
}

export default withRouter(WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(ViewPage)));