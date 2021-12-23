import React, { useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { useDispatch } from 'react-redux';
import { GetAdmin } from '../../Redux/Reducer/ServicesSlice';
import { useSelector } from 'react-redux';
import useAuth from '../../Hooks/useAuth';
import logo from '../../logo/Event Planning Logo.png'
import './AppBar.css'





const AppBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const { user, logout } = useAuth();
    const dispatch = useDispatch();
    const doc = { user: user.email };
    const admin = useSelector((state) => state.services.getAdminStore);
    useEffect(() => {

        dispatch(GetAdmin(doc));
    }, [user])


    console.log(admin);
    return (
        <nav className="navbar bg-gray-900 font-mono">
            <div className="nav-container">
                <Link exact to="/" className="nav-logo">
                   <span className="italic font-mono">Event Planner</span>
                </Link>

                <ul className={click ? "nav-menu active bg-gray-900" : "nav-menu bg-gray-900"}>
                    <li className="nav-item">
                        <Link
                            exact
                            to="/services"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            exact
                            to="/checkout"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            CheckOut
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            exact
                            to="/contacts"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Contacts Us
                        </Link>
                    </li>

                    {
                        admin?.admin && <li className="nav-item">
                            <Link
                                exact
                                to="/dashboard"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Dashboard
                            </Link>
                        </li>
                    }
                    <li className="nav-item">
                        {
                            user.email ? <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={logout}>logout</button>
                                :
                                <Link to="/login" activeClassName="active" className="nav-links">
                                    Sign in
                                </Link>

                        }
                    </li>
                    <li className="nav-item">

                        {
                            user.email && <p className="text-white">{user.displayName}</p>
                        }

                    </li>


                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    );
};

export default AppBar;