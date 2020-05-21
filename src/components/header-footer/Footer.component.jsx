import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">接下来的一年要一起加油哦~</div>
                <div className="footer_copyright">
                    &copy; 2020 By Weng. All Rights Reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;