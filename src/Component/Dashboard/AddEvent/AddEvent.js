import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../../Redux/Reducer/ServicesSlice';

const AddEvent = () => {
    const [createData, setCreateData] = useState({});
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...createData };
        newLoginData[field] = value;

        setCreateData(newLoginData);

    }
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch()
    const addEventstore = useSelector((state) => state.services.addEventstore);
    const handleCreateForm = (e) => {
        e.preventDefault();

        const procced = window.confirm('Are you want to Add');
        if(procced){
            dispatch(addEvent(createData));
            setSuccess(true);
            e.target.reset();
        }
    }
    return (
        <>
            {
                success && <h1 className="text-center text-3xl text-green-700">Success</h1>
            }
            <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <form className="mt-6" onSubmit={handleCreateForm}>
                    <div>
                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Event</label>
                        <input type="text"
                            onBlur={handleOnBlur}
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


                    <div className="mt-6">
                        <button type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddEvent;