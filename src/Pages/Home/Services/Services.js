import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Secvices.css';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div id="services" className='container'>
            <h1 className='text-primary text-center mt-5'>Our Services</h1>
            <div className='service-container'>
                <div className='row'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;