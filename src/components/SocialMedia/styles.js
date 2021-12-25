import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    
    socialWrapper: {
        position: 'absolute',
        background: 'lightGrey',
        marginTop: '13%',
        height: '31vh',
        width: '7vh',                        
        borderTopRightRadius: '10vh',
        borderBottomRightRadius: '10vh',

        [theme.breakpoints.down('xs')]: {
            marginTop: '32%',
            height: '12vh',
            width: '3vh',                        
            borderTopRightRadius: '7vh',
            borderBottomRightRadius: '7vh',
            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '32%',
            height: '13.6vh',
            width: '3.5vh',                        
            borderTopRightRadius: '7vh',
            borderBottomRightRadius: '7vh',
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '25%',
            height: '16vh',
            width: '3.7vh',                        
            borderTopRightRadius: '10vh',
            borderBottomRightRadius: '10vh',
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: '13%',
            height: '25vh',
            width: '5vh',                        
            borderTopRightRadius: '13vh',
            borderBottomRightRadius: '13vh',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginTop: '9%',
            height: '50vh',
            width: '12vh',                        
            borderTopRightRadius: '13vh',
            borderBottomRightRadius: '13vh',
        }, 
        [theme.breakpoints.up('lg')]: {
            marginTop: '15%',
            height: '35vh',
            width: '7vh',                        
            borderTopRightRadius: '13vh',
            borderBottomRightRadius: '13vh',
        },                      
     
    },
    socialLinkWrapper: {
        marginLeft: '10%',
        marginTop: '45%',
        padding: '6%',
        paddingLeft: '10%',
        fontSize: 'large',
        "&.MuiSvgIcon-root": {
            fontSize: '25px'
        },
        
        [theme.breakpoints.down('xs')]: {
            marginLeft: '12%',
            marginTop: '45%',
            "&.MuiSvgIcon-root": {
                fontSize: '11px'
            },            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginLeft: '8%',
            marginTop: '47%',
            "&.MuiSvgIcon-root": {
                fontSize: '15px'
            },            
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginLeft: '8%',
            marginTop: '50%',
            "&.MuiSvgIcon-root": {
                fontSize: '20px'
            },
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft: '10%',
            marginTop: '60%',
            "&.MuiSvgIcon-root": {
                fontSize: '20px'
            },
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginLeft: '14%',
            marginTop: '70%',
            "&.MuiSvgIcon-root": {
                fontSize: '27px'
            },
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '16%',
            marginTop: '80%',
            "&.MuiSvgIcon-root": {
                fontSize: '30px'
            },
        },                
    
    }
}));