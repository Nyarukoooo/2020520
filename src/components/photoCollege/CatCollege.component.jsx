import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


import cat1 from '../../resources/images/cat1.jpeg';
import cat2 from '../../resources/images/cat2.jpeg';
import cat3 from '../../resources/images/cat3.jpeg';
import cat4 from '../../resources/images/cat4.jpeg';
import cat5 from '../../resources/images/cat5.jpeg';
import cat6 from '../../resources/images/cat6.jpeg';
import cat7 from '../../resources/images/cat7.jpeg';
import cat8 from '../../resources/images/cat8.jpeg';


class CatCollege extends Component {
    constructor(){
        super();
        this.state={
            numberStart: 365,
            numberEnd: 227,
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
        }, 15);
    };

    render() {
        return (
            <div className="container">
                <Fade right cascade onReveal={() => this.numberDec()}>
                    <div className="pg_inital" style={{width: '80%', margin:'0 auto'}}>
                        <h1>“ 这一年中 我们遇见了泡芙和蛋黄 ”</h1>
                        <h1>成为家人的第一天 - <span style={{color:'#E4C2C1'}}>{this.state.numberStart}</span> days ago </h1>
                    </div>
                </Fade>

                <div className="gallery">
                    <Bounce cascade>
                        <figure className="gallery__item gallery__item--1">
                            <img alt="Cat" src={cat1} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--2">
                            <img alt="Cat" src={cat2} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--3">
                            <img alt="Cat" src={cat3} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--4">
                            <img alt="Cat" src={cat4} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--5">
                            <img alt="Cat" src={cat5} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--6">
                            <img alt="Cat" src={cat6} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--7">
                            <img alt="Cat" src={cat7} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--8">
                            <img alt="Cat" src={cat8} className="gallery__img" />
                        </figure>
                    </Bounce>
                </div>

            </div>



        );
    }
}

export default CatCollege;