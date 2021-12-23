import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventDelete, fetchServices } from '../../../Redux/Reducer/ServicesSlice';
import UpdateModal from './UpdateModal';

const ManageEvent = () => {
    const [showModal, setShowModal] = useState(false);
    const services = useSelector((state) => state.services.discover);
    const [myevent,setMyevent]=useState({});
    const dispatch = useDispatch()
    const [ok,setOk]=useState({});


    useEffect(() => {
        dispatch(fetchServices());
    }, [myevent,ok,services])
   

    
   
    const handelmodalOpen =(event)=>{
        setMyevent(event);
        setShowModal(true);
    }

    const handleRemove = (id) => {
        const procced = window.confirm('Are you want to Delete');
        if (procced) {
            dispatch(eventDelete(id));
        }
    }
    return (
        <>
        <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div class="py-8">
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                {/* table head */}
                                <tr>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                       Event Name
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Role
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                       Action
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                      Action 2
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* table dataa */}
                                {
                                    services?.map((event)=><tr>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div class="flex items-center">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {event.event}
                                            </p>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            Admin
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button onClick={()=>handelmodalOpen(event)}>Update</button>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button onClick={() => handleRemove(event._id)}>Delete</button>
                                    </td>
                                    
                                </tr>)
                                }

                            </tbody>
                        </table >
                    </div>
                </div>
            </div>
        </div>
        <UpdateModal setOk ={setOk} event={myevent} showModal={showModal} setShowModal={setShowModal}></UpdateModal>
        </>

    );
};

export default ManageEvent;