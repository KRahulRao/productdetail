import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import logo from '../../assets/images/logo.png';
import "../TodoBoard/ToDoBoard.scss";
import UserList from '../Users/userList';
import UserPosts from '../Users/userPosts';
import PostDetails from '../Users/postDetails';

@inject('todoStore')
@observer class Header extends Component {
  constructor(props) {
    super(props);
    // this.addNewRow = this.addNewRow.bind(this);
    // this.submit = this.submit.bind(this);
    this.state = {
      allUsers: [],
      headers: ['Name', 'Company', 'Posts'],
      showPosts: false,
      showUsers: true,
      showPostDetails: false,
      allPostsOfUser: [],
      postDetails: {},
      width: window.innerWidth,
      isMobileMenuVisible: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  toggleMenu = () => {
    this.setState({
      isMobileMenuVisible: !this.state.isMobileMenuVisible
    });
  }

  myFunction = () => {
    // debugger
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render() {
    //   console.log(oneRow[0]);

    return (
      <React.Fragment>
        <div class="top-header-bar">
          <p class="txt-center">Free us shipping & return</p>
        </div>
        <header id="split">
          <div className="c-container">

            {
              this.state.width <= 767 ? 
                <React.Fragment>
                  <div className="mobile-menu">
                    <button className="menu-btn btn-normal" onClick={this.toggleMenu}>
                      <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <ul className={`l-menu ${this.state.isMobileMenuVisible ? 'slide-in' : ''}`}>
                      <li className="text-right"><span onClick={this.toggleMenu}>X</span></li>
                      <li><a href="#">Men</a></li>
                      <li><a href="#">Women</a></li>
                      <li><a href="#">About</a></li>
                    </ul>
                    <div className="logo-wrapper">
                      <a href="#"><img src={logo} alt="logo" /></a>
                    </div>
                    <ul className="r-menu">
                      <li><button className="btn-normal"><i class="fa fa-user" aria-hidden="true"></i></button></li>
                      <li><button className="btn-normal cart-btn"><span>2</span><i class="fa fa-shopping-bag" aria-hidden="true"></i></button></li>
                    </ul>
                  </div>
                  
                </React.Fragment>
               :
                <div className="desktop-menu">
                  <ul className="l-menu">
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                  </ul>
                  <div className="logo-wrapper">
                    <a href="#"><img src={logo} alt="logo" /></a>
                  </div>
                  <ul className="r-menu">
                    <li><a href="#">About</a></li>
                    <li><button className="btn-normal"><i class="fa fa-user" aria-hidden="true"></i></button></li>
                    <li><button className="btn-normal cart-btn"><span>{this.props.cartCount}</span><i class="fa fa-shopping-bag" aria-hidden="true"></i></button></li>
                  </ul>
                </div>
            }

            
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header;