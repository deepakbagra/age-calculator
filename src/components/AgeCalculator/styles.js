import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapText:{        
        fontSize: 14,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 14,
        }       
    },
    wrapButton:{
        textTransform:'none',
        fontSize: 5,
        fontWeight: 'bold',                                                
        color:'#bf360c',
    }
}));