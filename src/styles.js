import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
        },
    }       
}));