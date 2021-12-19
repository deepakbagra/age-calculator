import { useState , React } from 'react';
import DatePicker  from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField, Button } from '@mui/material';
import DisplayAge from './DisplayAge';
import { calculations, bDayCount } from './calculations';

// global variables
// let calAgeDay = 0;
// let calAgeMonth = 0;
// let calAgeYear = 0;
// let inputDay = 0;
// let inputMonth = 0;
// let inputYear = 0;
// let eachMonthDays = {};
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth()+1;
const currentYear = new Date().getFullYear();


const AgeCalculation = () => {

  // initialising states
  const [selectDate, setSelectDate] = useState(new Date());   
  const [calculation, setCalculation] = useState([]);
  const [calculationDays, setCalculationDays] = useState(0);
  const [bDayCountdown, setbDayCountdown] = useState([]);
  const [bDayCountdownDays, setbDayCountdownDays] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);
  

  // handle date input
  const handleChangeDate = (date) => {
    setSelectDate(date);
  }

  // handle calculate button event
  const handleOnSubmit = (e) => {
    e.preventDefault();

    setDisplayResult(true);

    // extracting day, month and year from selected date object   
    let inputDay = selectDate.getDate();
    let inputMonth = selectDate.getMonth()+1;
    let inputYear = selectDate.getFullYear();
  
    let inputDate = [inputDay, inputMonth, inputYear];
    
    // calculating age
    let startDate = inputDate;
    let endDate = [currentDay, currentMonth, currentYear];     
    
    let results = calculations(startDate, endDate);

    let ageInFullFormat = results[0];    
    let ageInDaysOnly = results[1];

    let ageInYears = ageInFullFormat[0];
    let ageInMonths = ageInFullFormat[1];
    let ageInDays = ageInFullFormat[2];

     // set state for final calculated age in full format
     setCalculation([ageInYears, ageInMonths, ageInDays]);

     // set state for final calculated age in days only     
     setCalculationDays(ageInDaysOnly);
    
     let resultBdayCount = bDayCount(inputDate);
     let bDayCountmonths = resultBdayCount[0];
     let bDayCountDays = resultBdayCount[1];
     let bDayCountDaysOnly = resultBdayCount[2];

     // set state for birthday countdown
     setbDayCountdown([bDayCountmonths, bDayCountDays]);

     // set state for birthday countdown in days only
     setbDayCountdownDays(bDayCountDaysOnly);
     
  }
  
  // const calculateAge = (inputDate) => {

  //   const inputMonth = inputDate[1];
  //   const inputDay = inputDate[0];
  //   const inputYear = inputDate[2];

  //   // mapping month with corresponding days         
  //   eachMonthDays = {
  //     1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31,
  //     8:31, 9:30, 10:31, 11:30, 12:31
  //   }

  //   // adjusting feb month days for a leap year
  //   eachMonthDays[2] = isLeapYear(inputYear) ? 29 : 28;

  //   let isBorrowDay = false;
  //   let isBorrowMonth = false;

  //   // calculate difference between current date and date of birth
  //   calAgeDay = currentDay - inputDay;

  //   if (calAgeDay < 0) {      
  //       calAgeDay = calAgeDay + eachMonthDays[inputMonth];
  //       isBorrowDay = true; 
  //   }

  //   // calculate difference between current month and month of birth
  //   calAgeMonth = currentMonth + 1 - inputMonth;      

  //   // adjust borrow
  //   if (isBorrowDay) {
  //     calAgeMonth = calAgeMonth - 1;
  //   }

  //   // adjust negative difference
  //   if (calAgeMonth < 0) {      
  //       calAgeMonth = calAgeMonth + 12;      
  //     isBorrowMonth = true;
  //   }    

  //   // calculate difference between current year and year of birth
  //   calAgeYear = currentYear - inputYear;    

  //   if (isBorrowMonth) {     
  //       calAgeYear = calAgeYear - 1;      
  //   }
  //   // set state for final calculated age in full format
  //   setCalculation([calAgeYear, calAgeMonth, calAgeDay]);

  //   // set state for final calculated age in days only
  //   const ageInDays = calAgeInDays();
  //   setCalculationDays(ageInDays);

  // }
  
  // // function to count leap years
  // const countLeapYears = (startYear, endYear) => {
  //   let countLeap = 0;
  //   for (let year = startYear; year <= endYear; year++) {
  //      if (isLeapYear(year)) {
  //        countLeap++;
  //      }
  //   }
  //   return countLeap;
  // }
  // // calculating age in days only
  // const calAgeInDays = () => {

  //   // calculate years into days
  //   const yearsToDays = 365 * calAgeYear + 
  //       countLeapYears(inputYear, currentYear);

  //   // calulcate months into days
  //   let monthsToDays = 0;
  //   for (let month = inputMonth; month <= currentMonth ; month++) {
  //     monthsToDays += eachMonthDays[month];
  //   }
    
  //   // total days from calculated age
  //   const totalDays = calAgeDay + monthsToDays + yearsToDays;
  //   return totalDays; 
  // }
  
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat='dd/MM/yyyy'
          label="date-of-birth (dd/mm/yyyy)"              
          value={selectDate}
          onChange={handleChangeDate}
          renderInput={props => <TextField fullWidth {...props} />}
        />
      </LocalizationProvider >
      <Button 
          onClick={handleOnSubmit}                    
          style={{textTransform:'none',
                 fontSize:17,                                 
                 color:'#bf360c',
                }}
          >
          Calculate Age </Button> 
      
        {displayResult ?
         <DisplayAge 
            years={calculation[0]}
            months={calculation[1]}
            days={calculation[2]}
            daysOnly={calculationDays}
            bDayCountMonths={bDayCountdown[0]}
            bDayCountDays={bDayCountdown[1]}
            bDayCountDaysOnly={bDayCountdownDays} /> : ''}

         
    </>
  )
}
export default AgeCalculation;