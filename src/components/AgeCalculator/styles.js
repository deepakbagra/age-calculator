import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapText:{        
        fontSize: 14,
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 14,
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: 16,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 18,
        },  
    },
    button:{        
        "&.MuiButton-root": {           
            border: '1px solid',
            borderColor: 'blue'                                                                      
        },
        "&.MuiButton-text": {
            textTransform: 'none',                                                                                             
            color:'#bf360c',
            fontSize: 14,
            [theme.breakpoints.down('xs')]: {
                fontSize: 13,
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 14,
            } ,
            [theme.breakpoints.between('md', 'lg')]: {
                fontSize: 16,
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                fontSize: 18,
            },                                                                     
        },
        
        height: 37,        
        
    },
    headerText: {
        "&.MuiTypography-root": {
            marginBottom: '2%',
            margin: '1%',
            leftSpacing: 'none',
            fontSize: 14,
            [theme.breakpoints.down('xs')]: {
                fontSize: 13,
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 14,
            } ,
            [theme.breakpoints.between('md', 'lg')]: {
                fontSize: 16,
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                fontSize: 18,
            },
       
        }
    }
             
            
    
    
}));