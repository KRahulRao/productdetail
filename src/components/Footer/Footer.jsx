import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "./Footer.scss";

@observer class Footer extends Component {
  constructor(props) {
    super(props);
    // this.addNewRow = this.addNewRow.bind(this);
    // this.submit = this.submit.bind(this);
    this.state = {

    }
  }

  componentDidMount() {
  
  }



  render() {


    //   console.log(oneRow[0]);

    return (
        <div class="footer">
        <div class="contain">
        <div class="col">
          <h1>Men</h1>
          <ul>
            <li>OCA High</li>
            <li>OCA Low</li>
            <li>CATIBA High</li>
            <li>OCA Low</li>
          </ul>
        </div>
        <div class="col">
          <h1>Women</h1>
          <ul>
            <li>OCA High</li>
            <li>OCA Low</li>
            <li>CATIBA High</li>
            <li>OCA Low</li>
          </ul>
        </div>
        <div class="col">
          <h1>Support</h1>
          <ul>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Live Chat</li>
          </ul>
        </div>
        <div class="col">
          <h1>About</h1>
          <ul>
            <li>Mission</li>
            <li>Vision</li>
            <li>Future</li>
          </ul>
        </div>
        <div class="col">
          <h1>Pop Up Stories</h1>
          <ul>
            <li>Find near you</li>
            <li>Register</li>
            <li>Open ticket</li>
          </ul>
        </div>
        <div class="col social">
          <h1>News Letter</h1>
          <ul>
            <li>
                <img src="https://svgshare.com/i/5fq.svg" width="32" style={{"width": "32px"}}/>
                <img src="https://svgshare.com/i/5f_.svg" width="32" style={{"width": "32px"}}/>
            </li>
            <li></li>
          </ul>
        </div>
      <div class="clearfix"></div>
      </div>
      </div>   
      )
  }
}

export default Footer;