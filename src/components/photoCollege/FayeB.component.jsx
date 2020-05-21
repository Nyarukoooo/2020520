import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


import faye1 from '../../resources/images/faye1.JPG';
import faye2 from '../../resources/images/faye2.JPG';
import faye3 from '../../resources/images/faye3.JPG';
import faye4 from '../../resources/images/faye4.jpg';

class FayeB extends Component {
    constructor(){
        super();
        this.state={
            numberStart: 365,
            numberEnd: 304,
        }
    }

    numberDec = () => {
        if(this.state.numberStart > this.state.numberEnd) {
            this.setState({
                numberStart: this.state.numberStart - 1
            })
        } 
    };

    componentDidUpdate() {
        setTimeout(() => {
            this.numberDec()
        }, 50);
    };

    render() {
        return (
            <div className="container" style={{backgroundColor:'#E4C2C1'}}>
                <Fade right  onReveal={() => this.numberDec()}>
                    <div style={{width: '80%', margin:'0 auto', color: '#3e3e3e'}}>
                        <h1>你的生日 July, 21st - <span>{this.state.numberStart}</span> days ago </h1>
                    </div>
                </Fade>

                <div className="gallery_f">
                    <Zoom right cascade >
                        <figure className="gallery__item gallery__item--1">
                            <img alt="Faye" src={faye1} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--2">
                            <img alt="Faye" src={faye2} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--3">
                            <img alt="Faye" src={faye3} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--4">
                            <img alt="Faye" src={faye4} className="gallery__img" />
                        </figure>
                    </Zoom>
                </div> 


            </div>

        );
    }
}

export default FayeB;