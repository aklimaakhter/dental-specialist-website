import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, picture, name, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail =()=>{
        navigate(`/service/${id}`)
    }

    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <div className='card' style={{ width: '18rem', height:'500px' }}>
                <img style={{height:'200px'}} src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> $ {price}</p>
                    <Button onClick={() => navigateToServiceDetail(id)} variant="primary"> Make an Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;