import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class ProdItem extends Component {
    render() {
        const {currentItem, itemId, visible} = this.props;
        const {title, price, url, category} = currentItem;
        const cl = visible ? 'col-md-3' : 'col-md-3 not-visible'
        
        return (
            <div className={cl}>
                <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                        <img 
                            className="card-img rounded-0 img-fluid" 
                            src={`img/products/${category}/${url}`} alt={title}
                            onClick = {() => 
                                this.props.history.push(`flowers/${itemId}`)
                            }
                            />
                    </div>
                    <div className="card-body">
                        <div className="prod-title">{title}</div>
                        <div className="text-center mb-0 prod-price">{price} сум</div>
                        <div 
                            className='btn-cart'
                            onClick = {() => this.props.onAddItemToCart(itemId)}
                            >В корзину</div>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default withRouter(ProdItem)