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
    button:{
        "&.MuiButton-text": {
            textTransform: 'none',
            fontSize: 15,                                                        
            color:'#bf360c',        
        }
    },
    input: {
        "&.MuiTypography-root": {
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
        } 
            
    }
    
}));