import React, { Component } from 'react';
import '../Product.css';


class Product extends Component {

    state ={
        disabled: 'inline'
    }


    render() {
        const {product,addSelectedProducts,length,index} = this.props
        const description = <sector>{product.description}</sector>
        return (
            <div>
                <div className="Prod">
                    <div className="Img"><img src={product.logo}/></div>
                    <div className="Text">
                        <h3>{product.title}</h3>
                        {description}
                     </div>
                    <div className="Price">
                        <h2>{product.price} руб.</h2>
                        <button onClick={addSelectedProducts(product)}>В корзину!</button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Product;