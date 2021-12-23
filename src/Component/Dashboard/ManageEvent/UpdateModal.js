import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { UpdateEvent } from '../../../Redux/Reducer/ServicesSlice';

const UpdateModal = ({ event, setShowModal, showModal, setOk }) => {
   
    const [createData, setCreateData] = useState({});
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...createData };
        newLoginData[field] = value;

        setCreateData(newLoginData);

    }
    const dispatch = useDispatch();
    const updateStore = useSelector((state) => state.services.eventUpdateStore)
    const handleOnSubmit = (e) => {
        const body = {
            doc: createData,
            id: event._id
        }
        const procced = window.confirm('Are you want to Update');
        if (procced) {
            dispatch(UpdateEvent(body));  
                setOk(updateStore);
                setShowModal(false);           
        }
    }
    return (
        <>

            {showModal ? (
                <>
                    <div
                        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className=" relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="pt-10 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <form className="m-10" >
                                    <h3 className="mt-6 text-3xl text-center font-semibold">
                                        Update Your Info
                                    </h3>
                                    <div className="mt-4">
                                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Event</label>
                                        <input type="text"
                                            onBlur={handleOnBlur}
                                            defaultValue={event.event}
                                            name="event"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-current rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="mt-4">
                                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Price</label>
                                        <input type="text"
                                            onBlur={handleOnBlur}
                                            name="price"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-current  rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="mt-4">
                                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Image Url</label>
                                        <input type="text"
                                            onBlur={handleOnBlur}
                                            name="image"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-current rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="mt-4">
                                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Time-Duration</label>
                                        <input type="text"
                                            onBlur={handleOnBlur}
                                            name="timeDuration"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-current rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="mt-4">
                                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Workers</label>
                                        <input type="text"
                                            onBlur={handleOnBlur}
                                            name="workers"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-current rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                    </div>

                                    <div className="mt-4">
                                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Details</label>
                                        <textarea
                                            onBlur={handleOnBlur}
                                            name="details"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-current rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                    </div>



                                </form>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleOnSubmit}
                                    >
                                        Confirm to Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default UpdateModal;