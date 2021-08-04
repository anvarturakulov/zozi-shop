import React, {Component} from 'react'
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {listLoaded, listRequested, listError} from '../../actions'
import {changeCategory} from '../../actions'

class CategoryPanel extends Component {

    changeCategory = (e)=> {
        // this.props.listRequested();
        // const {RestoService} = this.props;
        // RestoService.getListItems()
        //     .then(res => this.props.listLoaded(res))
        //     .catch(() => this.props.listError())
        
        const btns = document.querySelectorAll('.category-type')
        btns.forEach(item => {
            item.classList.remove('active');
           })
        
        const target = e.target
        target.classList.add('active')
        this.props.changeCategory(target.dataset.category)
    }

    render() {
        const {currentCategory} = this.props

        const categoryList = [['bouquet','Букеты'], ['boxes','Цветы в коробках'], ['presents','Подарки и прочие']]
        const btnList = categoryList.map(item => {
            let clName = 'category-type'
            if (item[0] === currentCategory) {
                clName +=' active'
            }
            return (
                <li className="pb-2">
                    <button className={clName} 
                        data-category = {item[0]}
                        onClick = {(e)=> this.changeCategory(e)}    
                        >{item[1]}
                    </button>
                </li>
            )
        })

        console.log(btnList)

        return (
            <div className="col-lg-3">
                <h5 className="pb-2">Категории</h5>
                <ul className="list-unstyled templatemo-accordion">
                    {btnList}
                </ul>
            </div>
        )    
    }

    
}

const mapStateToProps = (state) => {
    return {
        // prodItems:state.list,
        // loading : state.loading,
        // error : state.error,
        // cartItems : state.cart,
        currentCategory : state.currentCategory
    }
}

const mapDispatchToProps = {
    listLoaded,
    listRequested,
    listError,
    changeCategory    
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(CategoryPanel));