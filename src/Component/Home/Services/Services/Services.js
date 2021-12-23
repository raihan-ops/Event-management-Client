import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../../../Redux/Reducer/ServicesSlice';
import SuccessAlert from '../../../Shared/Alert/SuccessAlert';
import Card from '../Card/Card';
import CardModal from '../Modal/CardModal';

const Services = () => {
    const [success,SetSuccess]=useState(false);
   
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchServices());
    }, [success])
   
    const services = useSelector((state) => state.services.discover);
    return (
        <>
        {
            success && <SuccessAlert></SuccessAlert>
        }

        <div class="flex flex-wrap m-4 ">
            
            {
                services.map((service)=><Card key={service._id} service={service} SetSuccess={SetSuccess}></Card>)
            }
        </div>
       
        </>
    );
};

export default Services;