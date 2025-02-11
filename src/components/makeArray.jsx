import React from 'react';
import './Box/Bars.css';

function makeArray(array,colors){
    return array.map((el, index) => (
        <div
            key={index}
            className="array-bar"
            style={{ height: `${el / 10}%`,  width: `${120- array.length}px`,backgroundColor:  colors[index]}}
        
        >
        </div>
    ))
    
}

export default makeArray;