import React from 'react';
import { Link } from 'react-router-dom';


const Success = () => {
    return (
        <section className="flex items-center h-full p-16 bg-coolGray-50 text-coolGray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-green-900">
                       Success
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Your Payment is Successfully.</p>
                    <p className="mt-4 mb-8 text-coolGray-600">.</p>
                    <Link to="/" className="px-8 py-3 font-semibold rounded bg-gray-600 text-coolGray-50">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default Success;