import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../../Hooks/useAuth';

import { OrderPostServices } from '../../../../Redux/Reducer/ServicesSlice';
import SuccessAlert from '../../../Shared/Alert/SuccessAlert';
import Calender from './Calender/Calender';

const CardModal = ({ setShowModal, showModal, service, SetSuccess }) => {
  const { user } = useAuth()
  const initialInfo = { UserName: user.displayName, email: user.email, phone: '', status: 'pending' };

  const [PurchaseInfo, setPurchaseInfo] = useState(initialInfo);

  const dispatch = useDispatch()
  // date 
  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...PurchaseInfo };
    newInfo[field] = value;
    setPurchaseInfo(newInfo);
  }

  const orderStored = useSelector((state) => state.services.orderStored);
  const handleOnSubmit = (e) => {
    const purchase = {
      ...PurchaseInfo,
      date: date,
      EventName: service.event,
      price: service.price,
      image:service.image,

    }


    const procced = window.confirm('Are you want to Add');
    if(procced){
      dispatch(OrderPostServices(purchase));
       setShowModal(false);
      SetSuccess(true);
    
  }
    }
    

  return (
    <>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {service.event}
                  </h3>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Your Name</label>
                    <input type="text"
                      onBlur={handleOnBlur}
                      defaultValue={user.displayName}
                      name="name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>
                  <div>
                    <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Your Email</label>
                    <input type="text"
                      onBlur={handleOnBlur}
                      defaultValue={user.email}
                      name="name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>
                  <div className="mt-4">
                    <label for="address" className="block text-sm text-gray-800 dark:text-gray-200">Your Address</label>
                    <input type="text"
                      name="address"
                      onBlur={handleOnBlur}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <label for="text" className="block text-sm text-gray-800 dark:text-gray-200">Your phone</label>

                    </div>

                    <input type="text"
                      name="phone"
                      onBlur={handleOnBlur}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <label for="text" className="block text-sm text-gray-800 dark:text-gray-200">Date</label>

                    </div>

                    <Calender date={date} setDate={setDate} handleCalendarClose={handleCalendarClose} handleCalendarOpen={handleCalendarOpen}>

                    </Calender>


                  </div>
                </div>
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

export default CardModal;