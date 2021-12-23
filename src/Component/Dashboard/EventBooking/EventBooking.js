import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllorderServices } from '../../../Redux/Reducer/ServicesSlice';

const EventBooking = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllorderServices());
    }, [])

    const BookingEvent = useSelector((state) => state.services.AllorderServices);
   
    return (

        <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div class="py-8">
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                {/* table head */}
                                <tr>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        User Name
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Email
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Event Booking
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Date
                                    </th>
                                    <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Payment
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* table dataa */}
                                {
                                    BookingEvent.map((event) => <tr key={event._id}>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {event.UserName}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {event.email}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {event.EventName}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {event.date.slice(0, 10)}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                </span>
                                                <span class="relative">
                                                    {event.payment2}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EventBooking;