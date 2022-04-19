import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { picture, name, description, price } = service;
    
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>{description}</h4>
            <p> $ {price}</p>
            <button>Book:{name}</button>
        </div>
    );
};

export default Service;