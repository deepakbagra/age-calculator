import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    appBar: {
      height: '45px',
      [theme.breakpoints.down('xs')]: {
        height: '30px'
      },
      background: '#424242',
      
    },

    leftSide: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          flexGrow: 1 ,
          marginBottom: '7px',
          fontSize: 17,
          [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            marginBottom: '20px'
          },
    },

    rightSide: {
      marginBottom: '7px',        
      fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        fontSize: 17,
        [theme.breakpoints.down('xs')]: {
          fontSize: 14,
          marginBottom: '20px'
        },
      },
       
}))