import React from 'react';
import specialist1 from '../../../images/specialist/specialist 1.png';
import specialist2 from '../../../images/specialist/specialist 2.png';
import specialist3 from '../../../images/specialist/specialist 3.png';
import specialist4 from '../../../images/specialist/specialist 4.png';
import specialist5 from '../../../images/specialist/specialist 5.png';
import specialist6 from '../../../images/specialist/specialist 6.png';
import Specialist from '../Specialist/Specialist';

const specialists = [
    { id: 1, name: '', img: specialist1 },
    { id: 2, name: '', img: specialist2 },
    { id: 3, name: '', img: specialist3 },
    { id: 4, name: '', img: specialist4 },
    { id: 5, name: '', img: specialist5 },
    { id: 6, name: '', img: specialist6 }
]

const Specialists = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Our Specialists</h2>
            <div className='row'>
                {
                    specialists.map(specialist => <Specialist
                        key={specialist.id}
                        specialist={specialist}
                    ></Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;