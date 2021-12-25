import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    
    socialWrapper: {
        position: 'absolute',
        background: 'lightGrey',
        marginTop: '13%',
        height: '15vh',
        width: '5vh',                        
        borderTopRightRadius: '10vh',
        borderBottomRightRadius: '10vh',

        [theme.breakpoints.down('xs')]: {
            marginTop: '32%',
            height: '11.3vh',
            width: '3vh',                        
            borderTopRightRadius: '7vh',
            borderBottomRightRadius: '7vh',
            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '32%',
            height: '12vh',
            width: '3vh',                        
            borderTopRightRadius: '7vh',
            borderBottomRightRadius: '7vh',
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop: '25%',
            height: '14vh',
            width: '3.3vh',                        
            borderTopRightRadius: '10vh',
            borderBottomRightRadius: '10vh',
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: '13%',
            height: '35vh',
            width: '8vh',                        
            borderTopRightRadius: '13vh',
            borderBottomRightRadius: '13vh',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginTop: '9%',
            height: '37vh',
            width: '10vh',                        
            borderTopRightRadius: '13vh',
            borderBottomRightRadius: '13vh',
        }, 
        [theme.breakpoints.up('lg')]: {
            marginTop: '15%',
            height: '50vh',
            width: '10vh',                        
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
                fontSize: '10px'
            },            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginLeft: '8%',
            marginTop: '47%',
            "&.MuiSvgIcon-root": {
                fontSize: '13px'
            },            
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginLeft: '8%',
            marginTop: '55%',
            "&.MuiSvgIcon-root": {
                fontSize: '15px'
            },
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft: '7%',
            marginTop: '54%',
            "&.MuiSvgIcon-root": {
                fontSize: '22px'
            },
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginLeft: '14%',
            marginTop: '67%',
            "&.MuiSvgIcon-root": {
                fontSize: '27px'
            },
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '16%',
            marginTop: '72%',
            "&.MuiSvgIcon-root": {
                fontSize: '30px'
            },
        },                
    
    }
}));