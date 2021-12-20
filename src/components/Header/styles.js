import { makeStyles } from '@material-ui/core/styles';

const myFontSize = 17;

export default makeStyles(theme => ({
    appBar: {
      height: '45px',
      [theme.breakpoints.down('xs')]: {
        height: '30px'
      },
      background: '#424242',
      
    },

    leftSide: {        
          flexGrow: 1 ,          
          fontSize: myFontSize,
          [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            marginBottom: '20px'
          },
    },

    rightSide: {     
      fontSize: myFontSize,
      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
        marginBottom: '20px'
        },
      },
       
}))