import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';


const BestTeam = () => {
 const bestEmploye=useSelector((state)=>state.services.bestTeamStore);

;
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Best Employee OF This Month</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">They are very much passionate and hard Worker.Customers Feedback we create this list.</p>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        {/* data loaded from json */}
                        {
                            bestEmploye.map((emp)=><div key={emp.id} class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={emp.image} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">{emp.name}</h2>
                                    <p class="text-gray-500">{emp.eventName}</p>
                                </div>
                            </div>
                        </div>)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestTeam;