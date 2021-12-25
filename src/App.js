import { React } from 'react';
import {  Box, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import useStyles from './styles';


// importing components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AgeCalculation from './components/AgeCalculator/AgeCalculation';
import Description from './components/Description/Description';
import SocialMedia from './components/SocialMedia/SocialMedia';

const App = () => {
    const classes = useStyles();  

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Raleway',
            'sans-serif',
          ].join(','),
        },
        breakpoints: {
            values: {
              xs: 380,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },             
    });    
     
   
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            <SocialMedia />

            <Box className={classes.ageCalculation}>
                <AgeCalculation/>
            </Box>
            <Box className={classes.description}>
                <Description /> 
            </Box> 
                       
            <Footer />

        </ThemeProvider>
    )
}

export default App
