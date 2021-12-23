import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapContent:{
        wordWrap: "break-word",
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
    },
    wrapHeader:{
        wordWrap: "break-word",
        fontSize: 16, 
        fontWeight: 'bold',       
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
    }
}));