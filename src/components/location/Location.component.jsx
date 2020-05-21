import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14660.161506359018!2d-71.17681463154915!3d42.36475460906429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sunion%20market!5e0!3m2!1sen!2sus!4v1589256433066!5m2!1sen!2sus" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabindex="0"
            ></iframe>

            <div className="location_tag">
                <div>此时 此刻 此地</div>
                <div>祝你快乐</div>
            </div>
        </div>
    );
};

export default Location;