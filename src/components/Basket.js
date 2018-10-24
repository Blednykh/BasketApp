import React, { Component } from 'react';
import picBasket from '../pictures/basket.png';
import BasketsProduct from "./BasketsProduct";
import '../Basket.css';

class Basket extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }


    handleClick() {
        const {selectedProducts} = this.props;
        const {sum} = this.props;
        const arr = selectedProducts.map(function(selectedProducts){return selectedProducts.title})
        alert("Вы добавили в корзину "+ arr +" на сумму "+sum+" руб.");
    }


    render() {
        const {selectedProducts} = this.props;
        const {sum} = this.props;
        const {deleteSelectedProducts} = this.props;
        return (
            <div className="Centr">
                <div className="BasketTitle">
                    <img src={picBasket}/>
                    <h3>Корзина</h3>
                </div>
                <div>
                    {selectedProducts.map((selectedProduct, index) =><BasketsProduct key={index}
                                                                                     index={index}
                                                                                     selectedProduct={selectedProduct}
                                                                                     deleteSelectedProducts = {deleteSelectedProducts}
                        />)}
                </div>
                <hr/>
                <div className="BasketPrice">
                    Всего: {sum} руб.
                </div>
                <div >
                    <button className="BasketButton" onClick={this.handleClick}>Оформить заказ</button>
                </div>


            </div>


        );

    }
}

export default Basket;