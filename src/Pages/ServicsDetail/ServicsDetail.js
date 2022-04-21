import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ServicsDetail = () => {
    const {serviceId} =useParams()
    return (
        <div>
            <h2>Welcome  servics details:{serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'><button className="btn btn-primary"> Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default ServicsDetail;