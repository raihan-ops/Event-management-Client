import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../../Redux/Reducer/ServicesSlice';
import Card from '../Services/Card/Card';
import PackageCard from './PackageCard';

const Packeges = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchServices());
    }, [])
    const services = useSelector((state) => state.services.discover);
    const miniServices=services.slice(0,3);
    return (
        <div>
          
        <section class="bg-white dark:bg-gray-900">
            <div class="h-[32rem] bg-gray-100 dark:bg-gray-800">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Services</h1>
                    
                    <div class="flex justify-center mx-auto mt-6">
                        <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>
                    
                    <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                        Here is demo Packeges.More Packeges in service Section.Thank You
                    </p>
                </div>
            </div>

           <div class="flex flex-wrap m-4 ">
              {
                  miniServices.map((service)=><PackageCard key={service._id} service={service}></PackageCard>)
              }
           </div>
        </section>
        </div>
    );
};

export default Packeges;