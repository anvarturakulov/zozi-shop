import React, {Component} from 'react'
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {listLoaded, listRequested, listError, addItemToCart} from '../../actions'
import Error from '../error'
import Spinner from '../spinner'
import ProdItem from '../prod-item'
import PaginationList from '../pagination-list'


class ProductPanel extends Component {

    componentDidMount() {
        this.props.listRequested();
        const {RestoService} = this.props;
        RestoService.getListItems()
            .then(res => this.props.listLoaded(res))
            .catch(() => this.props.listError())
    }

    render() {

        const {prodItems, loading, error, addItemToCart, currentCategory} = this.props;

        if (loading) return <Spinner/> 
        if (error)   return <Error/>

        const currentItems = prodItems.filter(item => item.category === currentCategory)
        
        const dev = currentItems.length / 12;
        let trunc = Math.trunc(dev)
        const pageCount = trunc < dev ? ++ trunc : trunc

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
                        currentItems.map((item, i) => {
                            const visible = (i<12) ? true : false 
                            return <ProdItem 
                                key = {item.id}
                                itemId = {item.id}
                                currentItem = {item}
                                onAddItemToCart = {addItemToCart}
                                visible = {visible}/>
                        })
                    }
                    
                </div>
                <PaginationList pageCount={pageCount}/>
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

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(ProductPanel));