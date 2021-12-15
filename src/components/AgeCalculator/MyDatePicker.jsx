import { useState , React } from 'react';
import DatePicker  from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography, TextField, Button } from '@mui/material';

// global variables
var calAgeDay=0;
var calAgeMonth=0;
var calAgeYear=0;
var calculatedAge=[];

const MyDatePicker = () => {
  const [selectDate, setSelectDate] = useState(new Date());  

  // handle date input
  const handleChangeDate = (date) => {
    setSelectDate(date);
  }

  // handle calculate button event
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // extracting day, month and year from selected date object
    let selectInputStr = JSON.stringify(selectDate);
    let selectInputDate = selectInputStr.split('T')[0];
    selectInputDate = selectInputDate.split('"')[1];

    let inputDay = parseInt(selectInputDate.split('-')[2]);
    let inputMonth = parseInt(selectInputDate.split('-')[1]);
    let inputYear = parseInt(selectInputDate.split('-')[0]);

    let inputDate = [inputDay, inputMonth, inputYear];

    calculatedAge = calculateAge(inputDate);

    console.log(calculatedAge);
  }

    

  const calculateAge = (inputDate) =>{

    let inputYear = inputDate[2];
    let inputMonth = inputDate[1];
    let inputDay = inputDate[0];
    
    // find a leap year
    let isLeapYear = false

    if ( ((inputYear % 4 === 0) && (inputYear % 100 !== 0))
       || (inputYear % 400 === 0) ) {
        isLeapYear = true;
       }

    // mapping month with corresponding days         
    const eachMonthDays = {
      1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31,
      8:31, 9:30, 10:31, 11:30, 12:31
    }

    // adjusting feb month days for a leap year
    eachMonthDays[2] = isLeapYear ? 29 : 28;

    let isBorrowDay = false;
    let isBorrowMonth = false;

    // calculate difference between current date and date of birth
    let calAgeDay = new Date().getDate() - inputDay;
    if (calAgeDay < 0) {
      calAgeDay += eachMonthDays[inputMonth];
      isBorrowDay = true;
    }

    // calculate difference between current month and month of birth
    let calAgeMonth = new Date().getMonth() + 1 - inputMonth;    

    // adjust borrow
    if (isBorrowDay) {
      calAgeMonth -= 1;
    }

    // adjust negative difference
    if (calAgeMonth < 0) {
      calAgeMonth += 12;
      isBorrowMonth = true;
    }    

    // calculate difference between current year and year of birth
    let calAgeYear = new Date().getFullYear() - inputYear;
    if (isBorrowMonth) {
      calAgeYear -= 1;
    }
    
    let calculatedAge = [calAgeDay, calAgeMonth, calAgeYear];
    
    return calculatedAge;
  }
  
  return (
    <box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat='dd/MM/yyyy'
          label="dob"      
          value={selectDate}
          onChange={handleChangeDate}
          renderInput={props => <TextField {...props} />}
        />
      </LocalizationProvider >
      <Button onClick={handleOnSubmit}>Calculate</Button>
      <h4>{JSON.stringify(selectDate)}</h4>  
    </box>
  )
}
export default MyDatePicker;