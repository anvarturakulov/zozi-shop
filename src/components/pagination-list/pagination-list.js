import React from 'react'

const PaginationList = ({pageCount}) => {
    
    const clickPageLink = (e)=> {
        const pageLinks = document.querySelectorAll('.page-link');
        const pageItems = document.querySelectorAll('.page-item');        
        const target = e.target
        const parent = target.parentNode

        pageItems.forEach(item => item.classList.remove('disabled'));
        parent.classList.add('disabled')

        pageLinks.forEach(item => item.classList.add('text-dark'));
        target.classList.remove('text-dark')

        pageLinks.forEach(item => item.classList.remove('active'));
        target.classList.add('active')

        const activePage = +target.textContent

        const products = document.querySelectorAll('.col-md-3>.card')

        products.forEach((item) => {
            const cartParent = item.parentNode
            cartParent.classList.add('not-visible')
        })

        console.log(activePage)
        products.forEach((item,i) => {
            if (i >= (activePage*12-12) && i < (activePage*12)) {
                const cartParent = item.parentNode
                cartParent.classList.remove('not-visible')
            } 
        })

        
    }

    let pagList = []
    for (let i =0; i<pageCount; i++) {
        pagList.push('');
    }

    return (
        <div div="row">
            <ul className="pagination pagination-lg justify-content-end">
                {
                    pagList.map((item, i) => {
                        const btnBlock = (i===0) ? 
                                <li className="page-item disabled" key={i}>
                                    <button 
                                        className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                                        tabIndex="-1"
                                        onClick = {clickPageLink}
                                        >{i+1}</button>
                                </li>
                                :
                                <li className="page-item" key={i}>
                                    <button 
                                        className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                                        onClick = {clickPageLink}
                                        >{i+1}</button>
                                </li>                    
                        return btnBlock
                    })
                }
            </ul>
        </div>
    )
}

export default PaginationList