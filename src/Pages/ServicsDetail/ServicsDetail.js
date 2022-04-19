import React from 'react';
import {useParams} from 'react-router-dom';

const ServicsDetail = () => {
    const {serviceId} =useParams()
    return (
        <div>
            <h2>Welcome  servics details:{serviceId}</h2>
        </div>
    );
};

export default ServicsDetail;