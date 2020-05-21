import React from 'react';
import Carrousel from './Carrousel.component';
import TimeUntil from './TimeUntil.component';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carrousel />
            <TimeUntil />
        </div>
    );
};

export default Featured;