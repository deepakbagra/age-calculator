import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapContent:{
        wordWrap: "break-word",
        fontSize: 14,        
        [theme.breakpoints.down('xs')]: {
            fontSize: 11,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 13,
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: 14,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 16,
        },
    },
    wrapHeader:{
        wordWrap: "break-word",
        fontSize: 14, 
        fontWeight: 'bold',       
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 14,
        } ,
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: 14,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            fontSize: 18,
        },
    }
}));