import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../../../Hooks/useAuth';
import { makeAdmin } from '../../../Redux/Reducer/ServicesSlice';

const AddAdmin = () => {
    const { user } = useAuth();
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {

        setEmail(e.target.value);
    }
    const dispatch = useDispatch();
    const handleAdminSubmit = (e) => {
        
        const myEmail={
            email
        }
        const procced = window.confirm('Are you want to Add');
        if(procced){
            dispatch(makeAdmin(myEmail));
            e.target.reset();
        }
       
        e.preventDefault()
    }
    return (
        <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <form className="mt-6" onSubmit={handleAdminSubmit}>
                <div className="mt-4">
                    <label for="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input type="text"
                        name="email"
                        onBlur={handleOnBlur}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div className="mt-6">
                    <button type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAdmin;