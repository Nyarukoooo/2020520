import React from 'react';
import Fade from 'react-reveal/Fade';


import disney1 from '../../resources/images/disney1.JPG';
import disney2 from '../../resources/images/disney2.JPG';
import disney3 from '../../resources/images/disney3.JPG';
import disney4 from '../../resources/images/disney4.JPG';
import disney5 from '../../resources/images/disney5.JPG';
import disney6 from '../../resources/images/disney6.jpeg';
import disney7 from '../../resources/images/disney7.jpeg';
import disney8 from '../../resources/images/disney8.jpeg';



class DisneyCollege extends React.Component{
    constructor(){
        super();
        this.state={
            numberStart: 0,
            numberEnd: 365,

        }
    }

    numberInc = () => {
        if(this.state.numberStart < this.state.numberEnd) {
            this.setState({
                numberStart: this.state.numberStart + 1
            })
        } 
    };

    componentDidUpdate() {
        setTimeout(() => {
            this.numberInc()
        }, 1);
    };


    render(){
        return (
            <div className="container">
                <Fade right cascade onReveal={() => this.numberInc()}>
                    <div className="pg_inital" style={{width: '80%', margin:'0 auto'}}>
                        <h1>“ 介绍完自己 让我们回顾一下过去的一年 ”</h1>
                        <h1>去年的520 - <span style={{color:'#E4C2C1'}}>{this.state.numberStart}</span> days ago </h1>
                    </div>
                </Fade>
    
                <div className="gallery">
                    <Fade left cascade>
                        <figure className="gallery__item gallery__item--1">
                            <img alt="Disney" src={disney1} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--2">
                            <img alt="Disney" src={disney2} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--3">
                            <img alt="Disney" src={disney3} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--4">
                            <img alt="Disney" src={disney4} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--5">
                            <img alt="Disney" src={disney5} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--6">
                            <img alt="Disney" src={disney6} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--7">
                            <img alt="Disney" src={disney7} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--8">
                            <img alt="Disney" src={disney8} className="gallery__img" />
                        </figure>
                    </Fade>
                </div>
            </div>
        );
    }
    
};

export default DisneyCollege;