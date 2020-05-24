import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import stay1 from '../../resources/images/stay1.jpg';
import stay2 from '../../resources/images/stay2.jpg';
import stay3 from '../../resources/images/stay3.jpg';
import stay4 from '../../resources/images/stay4.jpg';
import stay5 from '../../resources/images/stay5.jpg';
import stay6 from '../../resources/images/stay6.jpg';
import stay7 from '../../resources/images/stay7.jpg';
import stay8 from '../../resources/images/stay8.jpg';
import stay9 from '../../resources/images/stay9.jpg';
import stay10 from '../../resources/images/stay10.jpg';



class StayHome extends Component {
    constructor(){
        super();
        this.state={
            numberStart: 365,
            numberEnd: 66,
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
        }, 10);
    };

    render() {
        return (
            <div className="container" style={{backgroundColor:'#E4C2C1'}}>
                <Fade right onReveal={() => this.numberDec()}>
                    <div className="pg_inital" style={{width: '80%', margin:'0 auto'}}>
                        <h1>“ 突如其来的疫情 让我们有了朝夕相处的机会  ”</h1>
                        <h1>欢迎来到Watertown - <span>{this.state.numberStart}</span> days ago </h1>
                    </div>
                </Fade>

                <div className="gallery_h">
                    <Fade left cascade>
                        <figure className="gallery__item gallery__item--1">
                            <img alt="StayHome" src={stay1} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--2">
                            <img alt="StayHome" src={stay2} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--3">
                            <img alt="StayHome" src={stay3} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--4">
                            <img alt="StayHome" src={stay4} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--5">
                            <img alt="StayHome" src={stay5} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--6">
                            <img alt="StayHome" src={stay6} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--7">
                            <img alt="StayHome" src={stay7} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--8">
                            <img alt="StayHome" src={stay8} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--9">
                            <img alt="StayHome" src={stay9} className="gallery__img" />
                        </figure>

                        <figure className="gallery__item gallery__item--10">
                            <img alt="StayHome" src={stay10} className="gallery__img" />
                        </figure>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default StayHome;