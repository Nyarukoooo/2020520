import React, { Component } from 'react';
import Slide from 'react-reveal/Slide'

class TimeUntil extends Component {
    constructor(){
        super();
        this.state={
            deadline: '04 Jul 2018 20:20:20 pst',
            days:'0',
            hours:'0',
            minutes:'0',
            seconds:'0'
        }
    };

    getTimeUntil(deadline){
        const time = Date.parse(new Date()) - Date.parse(deadline);
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor(time/(1000*60*60*24));

        console.log(seconds);

        this.setState({seconds, minutes, hours, days});
    };

    componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.state.deadline), 1000); //每1s更新 
    };

    render() {
        const {seconds, minutes, hours, days} = this.state;
        return (
          <Slide left delay={1000}>
            <div className="countdown_wrapper">
              <div className="countdown_top">我们已经一起度过了！</div>
              <div className="countdown_bottom">
                <div className="countdown_item">
                  <div className="countdown_time">{days}</div>
                  <div className="countdown_tag">Days</div>
                </div>

                <div className="countdown_item">
                  <div className="countdown_time">{hours}</div>
                  <div className="countdown_tag">Hs</div>
                </div>

                <div className="countdown_item">
                  <div className="countdown_time">{minutes}</div>
                  <div className="countdown_tag">Mins</div>
                </div>

                <div className="countdown_item">
                  <div className="countdown_time">{seconds}</div>
                  <div className="countdown_tag">Secs</div>
                </div>
              </div>
            </div>
          </Slide>
        );
    }
}

export default TimeUntil;