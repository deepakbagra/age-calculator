import { React } from 'react';
import {  Box, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// importing components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AgeCalculation from './components/AgeCalculator/AgeCalculation';
import Description from './components/Description/Description';

const App = () => {

    const useStyles = makeStyles(theme => ({
       ageCalculation: {  
            backgroundColor:'#efebe9',           
            height: '50%',
            width: '50%',
            margin: '13% 25%',
            [theme.breakpoints.down('xs')]: {
                margin: '10% 10%',
                width: '80%'
            }
       },
       description: {  
        backgroundColor:'#efebe9',           
        height: '50%',
        width: '50%',
        margin: '13% 25%',
        [theme.breakpoints.down('xs')]: {
            margin: '17% 10%',
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            margin: '15% 25%',     
        }
   }       

    }));

    const classes = useStyles();    
   
    return (
        <Box >
            <CssBaseline />
            <Header />
            <Box className={classes.ageCalculation}>
                <AgeCalculation/>
            </Box>
            <Box className={classes.description}>
                <Description /> 
            </Box> 
                       
            <Footer />


        </Box>
    )
}

export default App
