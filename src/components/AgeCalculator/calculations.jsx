import isLeapYear from 'date-fns/isLeapYear';

// global variables
let calAgeDay = 0;
let calAgeMonth = 0;
let calAgeYear = 0;

// mapping month with corresponding days         
const eachMonthDays = {
    1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31,
    8:31, 9:30, 10:31, 11:30, 12:31
}

// this function calculate difference between two dates
export const calculations = (startDate, endDate) => {

    const startDay = startDate[0];
    const startMonth = startDate[1];
    const startYear = startDate[2];

    const endDay = endDate[0];
    const endMonth = endDate[1];
    const endYear = endDate[2];    

    // adjusting feb month days for a leap year
    eachMonthDays[2] = isLeapYear(startYear) ? 29 : 28;

    let isBorrowDay = false;
    let isBorrowMonth = false;

    // calculate difference between current date and date of birth
    calAgeDay = endDay - startDay;   

    if (calAgeDay < 0) {      
        calAgeDay = calAgeDay + eachMonthDays[startMonth];
        isBorrowDay = true; 
    }

    // calculate difference between current month and month of birth
    calAgeMonth = endMonth - startMonth;   

    // adjust borrow
    if (isBorrowDay) {
        calAgeMonth = calAgeMonth - 1;
    }

    // adjust negative difference
    if (calAgeMonth < 0) {      
        calAgeMonth = calAgeMonth + 12;      
        isBorrowMonth = true;
    }    

    // calculate difference between current year and year of birth
    calAgeYear = endYear - startYear;    

    if (isBorrowMonth) {     
        calAgeYear = calAgeYear - 1;      
    }
    // final calculated age in full format
    const ageInFullFormat = [calAgeYear, calAgeMonth, calAgeDay];

    // final calculated age in days only
    const ageInDays = calAgeInDays(startDate, endDate);
    
    const result = [ageInFullFormat, ageInDays];
    return result;
}

// function to count leap years
const countLeapYears = (startYear, endYear) => {
    let countLeap = 0;
    for (let year = startYear; year <= endYear; year++) {
       if (isLeapYear(year)) {
         countLeap++;
       }
    }
    return countLeap;
  }

// calculating age in days only
const calAgeInDays = (startDate, endDate) => {
    
    const startMonth = startDate[1];
    const startYear = startDate[2];    
    const endYear = endDate[2];

    // calculate years into days
    const yearsToDays = 365 * calAgeYear + 
        countLeapYears(startYear, endYear);

    // calulcate months into days
    let monthsToDays = 0;    
    let month = startMonth;    

    for (let i = 0; i < calAgeMonth ; i++) {
        month %= 13;
        if (month === 0) month++; 
        monthsToDays += eachMonthDays[month];
        month++;
    }  

    // total days from calculated age
    const totalDays = calAgeDay + monthsToDays + yearsToDays;
    
    return totalDays; 
}

// calculating birthday countdown in months and days
export const bDayCount = (inputDob) => {

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth()+1;
    const currentYear = new Date().getFullYear();
    let currentDate = [currentDay, currentMonth, currentYear];

    let endDay = inputDob[0];
    let endMonth = inputDob[1];
    let endYear = currentYear;

    if (endMonth < currentMonth) {
        endYear = currentYear + 1;        
    }
    else if (endMonth === currentMonth &&
             endDay < currentDay) {
        endYear = currentYear + 1;
    }

    let endDate = [endDay, endMonth, endYear];
    
    let result = calculations(currentDate, endDate);

    let bDayCountdown = result[0];    
    let bDayCountdownMonth = bDayCountdown[1];    
    let bDayCountdownDay = bDayCountdown[2];

    // calulcate days for the current month    
    let bDayCountdownDays = 0;

    // if entered dob is today's date -> ignore calculation
    if (currentDay !== endDay || currentMonth !== endMonth) {

        let month = currentMonth;
        if (currentMonth === endMonth ) {
            bDayCountdownDays = endDay - currentDay;
        }
        else {
            bDayCountdownDays = eachMonthDays[month] - currentDay;
        }
        
        if (currentMonth !== endMonth ||
             (currentMonth === endMonth && endDay < currentDay)) {

            // adding days for in-between months
            month++;
            month %= 13;
            if (month === 0) month++; 
            while (month !== endMonth) {
                month %= 13;
                if (month === 0) month++;
                bDayCountdownDays += eachMonthDays[month];            
                month++;        
            }
            // adding for the birthday's month
            bDayCountdownDays += endDay;
        }
        
        
    }   
    
    let resultBday = [bDayCountdownMonth,
         bDayCountdownDay, bDayCountdownDays];

    return resultBday;
}



