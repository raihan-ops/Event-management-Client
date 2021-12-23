import React, { useState } from 'react';
import CardModal from '../Modal/CardModal';

const Card = ({service,SetSuccess}) => {
    const [showModal, setShowModal] = useState(false);
    const handelmodalOpen =()=>{
        setShowModal(true);
    }
    return (
        <>
        <div className="mb-5 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56" src={service.image} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">


                <h1 className="mx-3 text-lg font-semibold text-white">{service.event}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Details</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">As an event planner, your organisational skills have to be out of this world. At any one time you will be working on several projects, all of which are operating on different leadtimes..</p>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  

                    <h1  className="text-gray-700 font-bold text-xl">
                        $ {service.price}
                    </h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    

                    <h1 className="px-2 text-sm font-bold">{service.timeDuration} Days</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    

                    <h1 className="px-2 text-sm font-bold">{service.workars} Days</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <button onClick={handelmodalOpen} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        Add to Booking
                    </button>
                </div>
            </div>
        </div>
        <CardModal key={service._id} service={service} showModal={showModal} setShowModal={setShowModal} SetSuccess={SetSuccess}></CardModal>
        </>
    );
};

export default Card;