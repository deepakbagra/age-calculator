import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        height:'3em',
        background: '#2E3B55',
        color: 'white',
        textAlign:'center',
        marginTop: '35%',
        position: 'fixed',
        bottom: 0,
        justifyContent: 'center',
        paddingTop: '1.3%',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            height:'2em',
        }            
    },
    text: {
        fontSize: '80%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '70%',            
        }
    }
}));