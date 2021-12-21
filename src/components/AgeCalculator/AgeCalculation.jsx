import { useState , React } from 'react';
import DatePicker  from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography, TextField, Button } from '@mui/material';
import DisplayAge from './DisplayAge';
import { calculations, bDayCount } from './calculations';
import { isValid } from 'date-fns';
import useStyle from './styles';

// global variables
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth()+1;
const currentYear = new Date().getFullYear();

const AgeCalculation = () => {
  const classes = useStyle();

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
  const handleOnSubmit = async (e) => {
    e.preventDefault();    
    
    // handling invalid input
    if (!selectDate || !isValid(selectDate)){     
      alert('Invalid date!');
      return;
    } 
    if (selectDate > new Date()) {
      alert('date-of-birth cannot be a future date!')
      return;  
    }    
    // after validating input, set state to display results
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
  
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Typography className={classes.headerText}
         bgcolor={'#efebe9'}  >
          Please select your date-of-birth in "dd/mm/yyyy" format
           and then click on "Calculate Age" button to calculate your age.</Typography>
        
        <DatePicker          
                   
          disableFuture
          inputFormat='dd/MM/yyyy'
          label="date-of-birth (dd/mm/yyyy)"              
          value={selectDate}
          onChange={handleChangeDate}          
          renderInput={params =>
             <TextField
             fullWidth             
             {...params}
             sx={{
               svg: {color:'#bf360c'},
               label: {color: 'blue'}
             }} />}
        />
      </LocalizationProvider >
      <Button fullWidth variant = 'text' className={classes.button}
          onClick={handleOnSubmit} 
      > 
          Calculate Age 
      </Button> 
      
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