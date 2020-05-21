import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import next from '../../resources/images/next.jpg';

class Graduate extends Component {
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

    render() {
        return (
            <div className="container" >
                <Fade right onReveal={() => this.numberInc()}>
                    <div className="pg_inital" style={{width: '80%', margin:'0 auto'}}>
                        <h1>“ 今天 你毕业了！  </h1>
                        <h1 style={{marginLeft:'10%'}}> 我和你也要开始新的一段人生旅途 </h1> 
                        <h1 style={{marginLeft:'20%'}}> 希望接下来的日子 </h1> 
                        <h1 style={{marginLeft:'30%'}}> 我们一起好好努力 创造属于自己的未来. ”</h1>
                        <h1> We will be successful - in next <span style={{color:'#9ad8fd'}}>{this.state.numberStart}</span> days </h1>
                    </div>
                </Fade>

                <div style={{ margin: '50px'}}>
                    <img alt="Faye" src={next} className="gallery__img" style={{width:'50%', margin: '50px auto', paddingBottom:'100px'}} />
                </div>
                
            </div>
        );
    }
}

export default Graduate;