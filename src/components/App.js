import React, { Component } from 'react';
import logo from '../pictures/logo.png';
import '../App.css';
import Product from "./Product";
import Basket from "./Basket"
import products from "../data"

class App extends Component {
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    state ={
        selectedProducts: [],
        sum: 0,
        top: '157',
        right: '180'
    }


    handleScroll(event) {
        let newTop = this.state.top;
        if(Number(event.pageY)>102){
            newTop = 56;
        }
        if(Number(event.pageY)<=102){
            newTop = 157-Number(event.pageY);
        }
        this.setState({top: newTop});
    };

    handleResize(event) {
        const clientWidth = Number(document.documentElement.clientWidth);
        let newRight = this.state.right;
        if(clientWidth>=1349){
            newRight = 180+(clientWidth-1349)/2;
        }
        else{
            newRight = 180-(1349-clientWidth)/2;
            if(newRight<0) newRight=0;
        }
        this.setState({right: newRight});
    };


    componentDidUpdate(){
        const list = this.state.selectedProducts;
        let sum = this.state.sum;
        localStorage.setItem("sum", sum);
        localStorage.setItem("arr", JSON.stringify(list))

        //window.removeEventListener('scroll', this.handleScroll);
    }
    componentDidMount(){
        const list = JSON.parse(localStorage.getItem("arr"))||[];
        let sum = Number(localStorage.getItem("sum")||0);
        this.setState({selectedProducts: list, sum: sum});

        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        
    }

    addSelectedProducts = (product) => (event) => {
        const list = this.state.selectedProducts;
        let sum = this.state.sum;
        list.push(product);
        sum+=Number(product.price);
        this.setState({selectedProducts: list, sum: sum});
    };

    deleteSelectedProducts = (index) => (event) => {
        const list = this.state.selectedProducts;
        let sum = this.state.sum;
        console.log(list);
        console.log(index);
        sum-=Number(list[index].price);
        list.splice(index, 1);
        this.setState({selectedProducts: list, sum: sum})

    };

  render() {
        const {selectedProducts}=this.state;
        const {sum}=this.state;
    return (
      <div className="App">
          <header>
              <div className="Header">
                  <img src={logo}/>
              </div>
          </header>
          <div className="Body">
              <div clsssName="Products">
              {products.map((product,index) => <Product key={index}
                                                        index={index}
                                                        length={products.length}
                                                        product={product}
                                                        addSelectedProducts={this.addSelectedProducts}
              />)}
              </div>
              <div className="Basket" style={{top: this.state.top, right: this.state.right}}>
              <Basket selectedProducts={selectedProducts}
                      sum={sum}
                      deleteSelectedProducts = {this.deleteSelectedProducts}
              />
              </div>
          </div>
          <div className="footer"/>
      </div>
    );
  }
}

export default App;

