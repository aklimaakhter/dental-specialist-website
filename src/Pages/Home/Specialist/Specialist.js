import React from 'react';

const Specialist = ({specialist}) => {
    const { img, name, designation
}= specialist;
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <div className='card' style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="card-title">{designation}</h3>
                    
                    
                </div>
            </div>
        </div>
    
    );
};

export default Specialist;