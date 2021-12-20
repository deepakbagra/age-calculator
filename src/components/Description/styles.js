import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapText:{
        wordWrap: "break-word",
        fontSize: 12.5,        
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 17,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 15,
        }
    }
}));