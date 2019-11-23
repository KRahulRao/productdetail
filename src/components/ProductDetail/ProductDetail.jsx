import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../TodoBoard/ToDoBoard.scss";
import UserList from '../Users/userList';
import UserPosts from '../Users/userPosts';
import PostDetails from '../Users/postDetails';
import Header from '../Header/Header'

@observer class ToDoBoard extends Component {
  constructor(props) {
    super(props);
    // this.addNewRow = this.addNewRow.bind(this);
    // this.submit = this.submit.bind(this);
    this.state = {
      productDetails: {},
      productImage: {},
      activeTab: 1
    }
  }

  componentDidMount() {
    this.props.store.fetchProductDetails(1)
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({ productDetails: data })
      });
    this.props.store.fetchProductImages(1)
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({ productImage: data })
      });
  }

  changeTab(activeTab) {
    this.setState({
      activeTab: activeTab
    })
  }

  render() {

    let { allUsers } = this.state;

    //   console.log(oneRow[0]);

    return (
      <div className="product-main-wrapper">
        <div class="c-container mt-5">
          <div class="breadcrumb-txt">&lt; Men</div>
        </div>
        <section class="product-description-section">
          <div class="c-container">
            <div class="p-row">
              <div class="p-col-sm">
                <div class="product-desc-setting">
                  <div className="clearfix">
                    <div className="l-content">
                      <h1>{this.state.productDetails.name}</h1>
                      <label>{this.state.productDetails.description}</label>
                    </div>
                    <div className="r-content">
                      <span className="lg-txt">${this.state.productDetails.price} USD</span>
                      <label>154 Reviews</label>
                    </div>
                  </div>
                  <div class="product-desc-card">
                    <ul class="tab-ul clearfix">
                      <li className={`${this.state.activeTab === 1 ? 'active': ''}`} onClick={()=> this.changeTab(1)}>
                        <a href="#">MEN</a>
                      </li>
                      <li className={`${this.state.activeTab === 2 ? 'active': ''}`}  onClick={()=> this.changeTab(2)}>
                        <a href="#">WOMEN</a>
                      </li>
                    </ul>
                    {this.state.activeTab === 1 ?
                    <div class="tab-content" >
                      <div className="upper-content-wrapper">
                        <div>
                          <label>SELECT COLOR</label>
                          <ul class="color-selector-ul">
                            <li class="white-color">
                              <span></span>
                            </li>
                            <li class="d-blue-color">
                              <span></span>
                            </li>
                            <li class="black-color">
                              <span></span>
                            </li>
                            <li class="red-color  active">
                              <span></span>
                            </li>
                            <li class="yellow-color">
                              <span></span>
                            </li>
                            <li class="blue-color">
                              <span></span>
                            </li>
                            <li class="green-color">
                              <span></span>
                            </li>
                            <li class="cream-color">
                              <span></span>
                            </li>
                            <li class="blue-color">
                              <span></span>
                            </li>
                            <li class="d-cream-color">
                              <span></span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <label className="clearfix">SELECT SIZE <span className="size-txt">Size &amp; Fit Guide</span></label>
                          <div className="size-btn-wrapper">
                            <button>5</button>
                            <button>5.5</button>
                            <button className="not-available">6</button>
                            <button>6.5</button>
                            <button>7</button>
                            <button className="not-available">7.5</button>
                            <button className="active">8</button>
                            <button className="not-available">8.5</button>
                            <button className="not-available">9</button>
                            <button className="not-available">9.5</button>
                            <button>10</button>
                            <button>10.5</button>
                            <button className="not-available">11</button>
                            <button>11.5</button>
                            <button>12</button>
                            <button className="not-available">12.5</button>
                            <button>13</button>
                          </div>
                        </div>
                      </div>
                      <button onClick={this.props.addToBag} className="add-cart-btn">add to bag</button>
                    </div> :
                    <div class="tab-content">
                      <div className="upper-content-wrapper">
                        <div>
                          <label>SELECT COLOR</label>
                          <ul class="color-selector-ul">
                            <li class="white-color">
                              <span></span>
                            </li>
                            <li class="d-blue-color">
                              <span></span>
                            </li>
                            <li class="black-color">
                              <span></span>
                            </li>
                            <li class="red-color  active">
                              <span></span>
                            </li>
                            <li class="yellow-color">
                              <span></span>
                            </li>
                            <li class="blue-color">
                              <span></span>
                            </li>
                            <li class="green-color">
                              <span></span>
                            </li>
                            <li class="cream-color">
                              <span></span>
                            </li>
                            <li class="blue-color">
                              <span></span>
                            </li>
                            <li class="d-cream-color">
                              <span></span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <label className="clearfix">SELECT SIZE <span className="size-txt">Size &amp; Fit Guide</span></label>
                          <div className="size-btn-wrapper">
                            <button>5</button>
                            <button>5.5</button>
                            <button className="not-available">6</button>
                            <button>6.5</button>
                            <button>7</button>
                            <button className="not-available">7.5</button>
                            <button className="active">8</button>
                            <button className="not-available">8.5</button>
                            <button className="not-available">9</button>
                            <button className="not-available">9.5</button>
                            <button>10</button>
                            <button>10.5</button>
                            <button className="not-available">11</button>
                            <button>11.5</button>
                            <button>12</button>
                            <button className="not-available">12.5</button>
                            <button>13</button>
                          </div>
                        </div>
                      </div>
                      <button className="add-cart-btn">add to bag</button>
                    </div>
                    }
                  </div>
                  <p className="sm-txt txt-center">Worldwide Shipping + Free Returns</p>
                </div>
              </div>
              <div class="p-col-lg">
                <img class="d-block w-100" src={this.state.productImage.url} alt="First slide" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ToDoBoard;