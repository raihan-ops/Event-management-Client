import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import ReactDatePicker from 'react-datepicker';

const Calender = ({ date, setDate, handleCalendarClose, handleCalendarOpen }) => {
     
    return (
        <div >
            <ReactDatePicker


                selected={date}
                onChange={(date) => setDate(date)}
                onCalendarClose={handleCalendarClose}
                onCalendarOpen={handleCalendarOpen}
            />
        </div>
    );
};

export default Calender;