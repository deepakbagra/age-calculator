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
       root: {  
            backgroundColor:'#efebe9',           
            height: '50%',
            width: '50%',
            margin: '13% 25%',
            [theme.breakpoints.down('xs')]: {
                margin: '5% 5%',
                width: '90%'
            }
       }       

    }));

    const classes = useStyles();    
   
    return (
        <Box >
            <CssBaseline />
            <Header />
            <Box className={classes.root}>
                <AgeCalculation/>
            </Box>
            <Box className={classes.root}>
                <Description /> 
            </Box> 
                       
            <Footer />


        </Box>
    )
}

export default App
