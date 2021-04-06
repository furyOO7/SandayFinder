import React from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DisplaySunday from './DisplaySunday';

const DatePickerComp = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    let [showSundayText, setShowSundayText] = useState('')
    let [calculatedSundays, setCalculatedSundays] = useState([])
    const showAllSunday = () => {
        let d1 = Date.parse(startDate);
        let d2 = Date.parse(endDate);
        if (false) {
            alert ("Error!");
        } 
        else{
            for (var d = startDate; d <= endDate; d.setDate(d.getDate()+1)) {
               if(d.getDay() === 0){
                   let dd = d.getDate();
                   let mm = d.getMonth() +1;
                   let yy = d.getFullYear();
                calculatedSundays = [...calculatedSundays,`${dd}-${mm}-${yy}`]
               setCalculatedSundays(calculatedSundays)
               }
                
            }
            if(calculatedSundays.length < 1){
                setShowSundayText('No Sunday Found')
            }
        }
    }
    return (  
        <React.Fragment>
        <div>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        <button onClick={showAllSunday}>Show Sundays</button>
            {/* <input type="date" id="startdate" value={startDate} onClick={(e) => dateSetter(e, 'startdate')}></input>
            <input type="date" id="enddate" value={endDate} onClick={(e) => dateSetter(e, 'enddate')}></input>
            <div id="buttonsunday" onClick={showAllSunday}>Calculate Sunday</div> */}
        </div>
        {
           calculatedSundays.length ? <DisplaySunday calculatedSundays={calculatedSundays}/> : showSundayText
        }
        </React.Fragment>
    );
}
 
export default DatePickerComp;