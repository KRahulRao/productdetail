import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "./ToDoBoard.scss";
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import ProductDetail from '../ProductDetail/ProductDetail';
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts';

@inject('todoStore')
@observer class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        // this.addNewRow = this.addNewRow.bind(this);
        // this.submit = this.submit.bind(this);
        this.state = {
           allImages:[],
           cartCount:0,
        }
    }

    componentDidMount() {
        this.props.todoStore.fetchAllImages()
        .then((response)=>{
            return response.json();
        }).then((data)=>{
           this.setState({ allImages : data })
        });
    }
    addToBag = () =>{
        let { cartCount } = this.state;
        this.setState({ cartCount: (cartCount + 1) });
    }

  
    
    render(){
        return(
                <div>
                        <Header
                           store={this.props.todoStore}
                           cartCount={this.state.cartCount}

                        />
                        <ProductDetail 
                           addToBag={this.addToBag}
                           store={this.props.todoStore}
                        />
                        <RecommendedProducts 
                           store={this.props.todoStore}
                           allImages={this.state.allImages}
                        />
                        <Footer 
                        />
                </div>   

          
        )
    }
}

export default ToDoBoard;