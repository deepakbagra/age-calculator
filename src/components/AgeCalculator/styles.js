import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapText:{        
        fontSize: 14,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 15,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 13,
        }       
    }
}));