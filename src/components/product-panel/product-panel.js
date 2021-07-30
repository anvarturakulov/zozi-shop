import React, {Component} from 'react'
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {listLoaded, listRequested, listError, addItemToCart} from '../../actions'
import Error from '../error'
import Spinner from '../spinner'
import ProdItem from '../prod-item'
import CategoryPanel from '../category-panel/index.js'



class ProductPanel extends Component {

    componentDidMount() {
        this.props.listRequested();
        const {RestoService} = this.props;
        RestoService.getListItems()
            .then(res => this.props.listLoaded(res))
            .catch(() => this.props.listError())
    }


    render() {

        const {prodItems, loading, error, addItemToCart} = this.props;

        if (loading) return <Spinner/> 
        if (error)   return <Error/>

        return (
            
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
                    {
                        prodItems.map(item => {
                            return <ProdItem 
                                key = {item.id}
                                itemId = {item.id}
                                currentItem = {item}
                                onAddItemToCart = {addItemToCart}/>
                        })
                    }
                    
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
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        prodItems:state.list,
        loading : state.loading,
        error : state.error,
        cartItems : state.cart
    }
}

const mapDispatchToProps = {
    listLoaded,
    listRequested,
    listError,
    addItemToCart
    
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(ProductPanel));