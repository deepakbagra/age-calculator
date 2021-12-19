import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStlye from './styles';

const Header = () => {
    const classes = useStlye();
    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar variant='dense' className={classes.toolbar}>
                <Typography className={classes.leftSide} >
                    Age Calculator
                </Typography>
                <Typography className={classes.rightSide} >
                    Birthday Countdown
                </Typography>
                
            </Toolbar>
        </AppBar>
    )
}

export default Header
