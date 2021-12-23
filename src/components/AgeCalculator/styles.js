import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapText:{        
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 15,
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: 20,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 25,
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
            fontSize: 16,
            [theme.breakpoints.down('xs')]: {
                fontSize: 13,
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 15,
            } ,
            [theme.breakpoints.between('md', 'lg')]: {
                fontSize: 20,
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                fontSize: 25,
            },                                                                     
        },
        
        height: 37,        
        
    },
    headerText: {
        "&.MuiTypography-root": {
            marginBottom: '2%',
            margin: '1%',
            leftSpacing: 'none',
            fontSize: 16,
            [theme.breakpoints.down('xs')]: {
                fontSize: 13,
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 15,
            } ,
            [theme.breakpoints.between('md', 'lg')]: {
                fontSize: 18,
            },
            [theme.breakpoints.between('lg', 'xl')]: {
                fontSize: 23,
            },
       
        }
    }
             
            
    
    
}));