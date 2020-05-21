import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import song1 from '../../resources/images/song1.jpeg';

class SongB extends Component {
    constructor(){
        super();
        this.state={
            numberStart: 365,
            numberEnd: 322,
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
                <Fade right onReveal={() => this.numberDec()}>
                    <div className="pg_inital" style={{width: '80%', margin:'0 auto'}}>
                        <h1>“ 同样都是七月出生的我们 一起庆祝生日 ”</h1>
                        <h1>July, 3rd - <span>{this.state.numberStart}</span> days ago </h1>
                    </div>
                </Fade>

                <div className="gallery_b">
                    <Zoom left cascade >
                        <figure className="gallery__item gallery__item--b">
                            <img alt="Song" src={song1} className="gallery__img" />
                        </figure>

                        <div className="gallery__item--t" style={{fontSize: '35px', marginLeft:'10px'}}> 
                                <p style={{marginTop:'0'}}>吃上了你安排的波士顿大生蚝</p>
                                <p>戴上了你送我的手表</p>
                                <p>一起分你给我订的生日蛋糕</p>
                                <p>虽然那天你生病了</p>
                                <p>但你还是让我度过了一个完美的生日</p>
                                <p>谢谢有这样一个你的存在</p>
                        </div>
                    </Zoom>
                </div>    
            </div>
        );
    }
}

export default SongB;