import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../TodoBoard/ToDoBoard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



@inject('todoStore')
@observer class ToDoBoard extends Component {
    constructor(props) {
        super(props);
        // this.addNewRow = this.addNewRow.bind(this);
        // this.submit = this.submit.bind(this);
        this.state = {
        }
    }

    componentDidMount() {
    }

    renderSimilarProducts(){
        console.log(this.props.allImages);
        return this.props.allImages.map((image)=>{
            return (<div class="suggestion-col">
                    <div class="suggestion-card">
                    <div className="imageWrapper"><img class="img-100" alt="suggestion-image" src={image.url}/></div>
                    <div class="card-text">
                        <span class="item-title">White Canvas</span>
                        <span class="item-price">$79</span>
                    </div>
                    </div>
                </div>)
        });
    }
  
    
    render(){
        var settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    // slidesToScroll: ,
                    infinite: true,
                   // dots: true
                  }
                },
            ] 
          };
        return(
                <div>
                    <section class="suggestion-section">
                        <div class="c-container">
                            <h2>You'll Also Like</h2>
                            <div class="suggestion-row clearfix">
                                <Slider {...settings}>
                                        {
                                             this.renderSimilarProducts()
                                        }  
                                </Slider> 
                            </div>
                        </div>
                    </section>
                </div>   

          
        )
    }
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  display: "block", background: "#D3D3D3" }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props){
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  display: "block", background: "#D3D3D3" }}
        onClick={onClick}
      />
    );
  }

export default ToDoBoard;