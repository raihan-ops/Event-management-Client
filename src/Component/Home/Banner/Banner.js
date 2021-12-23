import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../../AppBar/AppBar';
import SimpleSlider from '../MyCarousel/MyCarousel';

// https://mindlercareerlibrarynew.imgix.net/17A-Event_Management.png
const Banner = () => {
    return (

        <div class="bg-indigo-900 relative overflow-hidden h-screen">
            <img src="https://mindlercareerlibrarynew.imgix.net/17A-Event_Management.png" class="absolute h-full w-full object-cover" alt='' />
            
            <div class="inset-0 bg-black opacity-25 absolute">
            </div>
            <header class="absolute top-0 left-0 right-0 z-20">
               
            </header>
            <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                    <span class="font-bold uppercase text-yellow-400">
                        Event Planner
                    </span>
                    <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
                        Let yourself be carried
                        <br />
                        by nature
                    </h1>
                    <Link to="/services" class="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
                        Discover
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;