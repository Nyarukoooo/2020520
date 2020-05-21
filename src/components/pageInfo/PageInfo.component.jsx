import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import faye from '../../resources/images/faye_icon.JPG';
import song from '../../resources/images/song.JPG';

const PageInfo = () => {
    return (
            <div className="center_wrapper">
                <Fade right cascade >
                    <div className="pg_inital">
                        <h1>“ 首先 大声告诉所有人！我们是谁！”</h1>
                    </div>
                </Fade>

                <div className="vn_wrapper">
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <Flip duration={1500} delay={500}>
                                        <div 
                                            className="vn_icon"
                                            style={{
                                                background: `url(${faye})`
                                            }}
                                            >
                                        </div>
                                    </Flip>

                                    <div className="vn_title">正在寻找自身价值的 <br/> 小菲 (Faye)</div>
                                    <Fade left cascade duration={1000} delay={500}>
                                        <div className="vn_desc">
                                            <p>Live in New York City, Study at NYU</p>
                                            <p>作为一个外表美丽内心善良的女孩子</p>
                                            <p>她 爱美食 爱夜宵 爱时尚 爱生活</p>
                                            <p>她最大的优点就是</p> 
                                            <p>对待自己爱的人 上心&认真</p>
                                            <p>前几天刚毕业 正在寻找自己的第一份工作...</p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={500} delay={800}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <Flip duration={1500} delay={800}>
                                        <div 
                                            className="vn_icon"
                                            style={{
                                                background: `url(${song})`
                                            }}>
                                        </div>
                                    </Flip>
                                    <div className="vn_title">想要赚大钱的 <br/> 小松 (Max)</div>
                                    <Fade left cascade duration={1000} delay={800}>
                                        <div className="vn_desc">
                                            <p>Live in Boston, Study at NEU</p>
                                            <p>我的目标是变成成熟有思想 成为一个独当一面的人</p>
                                            <p>我 爱打游戏 爱猫 爱车 爱小菲</p>
                                            <p>我最大的心愿就是</p>
                                            <p>能够凭借自己的努力创造属于自己的幸福</p>
                                            <p>并且把努力成果分享给我爱的所有人...</p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
    );
};

export default PageInfo;