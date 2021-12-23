import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({service}) => {
    return (
        <div class="mb-5 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img class="object-cover object-center w-full h-56" src={service.image} alt="avatar" />

            <div class="flex items-center px-6 py-3 bg-gray-900">
                

                <h1 class="mx-3 text-lg font-semibold text-white">{service.event}</h1>
            </div>

            <div class="px-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Details</h1>

                <p class="py-2 text-gray-700 dark:text-gray-400">As an event planner, your organisational skills have to be out of this world. At any one time you will be working on several projects, all of which are operating on different leadtimes..</p>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">


                    <h1 class="text-gray-700 font-bold text-xl">
                        $ {service.price}
                    </h1>
                </div>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    
                </div>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <Link to="/services">
                        <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            Explore
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default PackageCard;