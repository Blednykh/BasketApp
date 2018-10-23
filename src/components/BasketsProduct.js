import React, { Component } from 'react';
import picDelete from '../pictures/delete.png';
import '../Basket.css';

class BasketsProduct extends Component{
    render(){
        const {selectedProduct} = this.props;
        const {deleteSelectedProducts} = this.props;
        return (
            <div className="BasketProd">
                <div className="BasketImg" ><img src={picDelete} onClick={deleteSelectedProducts(this.props.index)}/></div>
                <div className="BasketText">{selectedProduct.title}</div>
                <div className="BasketPrice">{selectedProduct.price} руб.</div>
            </div>
        );

    }
}

export default BasketsProduct;