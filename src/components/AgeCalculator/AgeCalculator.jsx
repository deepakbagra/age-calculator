import { Box,  Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import useStyle from './styles';

const AgeCalculator = () => {
    const classes = useStyle();

    const [ selectDate, setSelectDate ] = useState({
        inputYear: '' 
    });

    const [ myAge, setMyAge ] = useState(0)

    const handleInputYear = (e) =>{
        setSelectDate({
            ...selectDate,
            inputYear: e.target.value,
        })
    }

    const calculateAge = (dob) => {
        const d = new Date();
        let currentYear = d.getFullYear();
        return currentYear - dob;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userInput = {
            inputYear: selectDate.inputYear,
        }
        console.log(userInput);

        let calAge = calculateAge(userInput.inputYear);
        
        setMyAge(calAge);

        console.log(myAge);

        alert(`I am ${myAge} years old!`)

        setSelectDate({
            inputYear: '',
        })
        return myAge;        
    }
    
    return (
        <Box bgcolor='grey' bgcolor='green'>
            <TextField
             type='text'
             label='birth-year'
             required
             name='birth-year'
             value={selectDate.inputYear}
             onChange={handleInputYear}
             />
             <Button className={classes.button}
                variant='contained'                
                type='submit'
                color='secondary'
                onClick={handleSubmit}>Calculate</Button>

           
        </Box>
    )
}

export default AgeCalculator
