import React from 'react';
import useServices from '../../hooks/useServices';

const ManagesService = () => {
    const [services,setServices] = useServices();
    const handleDelete =id =>{
        const proceed = window.confirm('Are you sure delete?')
        if(proceed){
            const url =`http://localhost:5000/service/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remaining =services.filter(service=>service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manages your service</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>Delete</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManagesService;