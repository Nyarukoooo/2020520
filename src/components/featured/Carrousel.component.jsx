import React from 'react';
import Slider from 'react-slick';

import item1 from '../../resources/images/item1.jpg';
import item2 from '../../resources/images/item2.JPG';
import item3 from '../../resources/images/item3.JPG';
import item4 from '../../resources/images/item4.JPG';
import item5 from '../../resources/images/item5.jpg';
import item6 from '../../resources/images/item6.jpg';
import item7 from '../../resources/images/item7.jpg';


import faye from '../../resources/images/faye.JPG';


const Carrousel = () => {
    

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 1000
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                overflow: 'hidden',
                height: `${window.innerHeight}px` //responsive for height change
            }}
        >
            <Slider {...settings}>  
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${item3})`,
                            height: `${window.innerHeight}px`,
                            backgroundPositon: 'center'
                        }}>
                        <div className="artist_name" style={{border: '2px solid #f1d1d1'}}>
                            <div className="wrapper" style={{border: '2px solid #f1d1d1'}}>
                                Hello <br/> 小菲！ 
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${item2})`,
                            height: `${window.innerHeight}px`
                        }}>
                        <div className="artist_name" style={{ border: '2px solid #f1d1d1'}}>
                            <div className="wrapper" style={{ border: '2px solid #f1d1d1'}}>
                                今天是我们<br/>度过的第二个 
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${item4})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>  
                    <div className="artist_name" >
                            <div className="wrapper">
                                520<br/>我爱你哟~  
                            </div>
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${faye})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>  
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${item1})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>  
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${item5})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>  
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${item6})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>  
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${item7})`,
                            height: `${window.innerHeight}px`
                        }}>
                    </div>  
                </div>
            </Slider> 
        </div>
    );
};

export default Carrousel;