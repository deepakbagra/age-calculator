import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

// importing components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AgeCalculator from './components/AgeCalculator/AgeCalculator';
import Description from './components/Description/Description';


const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <AgeCalculator />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Description />
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default App
