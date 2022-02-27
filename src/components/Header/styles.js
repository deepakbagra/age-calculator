import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
    appBar: {
      height: '45px',
      [theme.breakpoints.down('xs')]: {
        height: '40px'
      },
      [theme.breakpoints.between('xs', 'md')]: {
        height: '40px'
      },
      [theme.breakpoints.between('md', 'lg')]: {
        height: '50px'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        height: '70px'
      },
      background: '#424242',
      
    },
    toolbar: {
      height:'100%',
      "&.MuiToolbar-dense": {
        minHeight: '0px'
      }    
    },

    leftSide: {        
          flexGrow: 1 ,
                            
          [theme.breakpoints.down('xs')]: {
              fontSize: 14,
          },
          [theme.breakpoints.between('sm', 'md')]: {
              fontSize: 16,
          } ,
          [theme.breakpoints.between('md', 'lg')]: {
              fontSize: 18,
          },
          [theme.breakpoints.between('lg', 'xl')]: {
              fontSize: 22,
          },
    },

    rightSide: {  
                
          [theme.breakpoints.down('xs')]: {
              fontSize: 14,
          },
          [theme.breakpoints.between('sm', 'md')]: {
              fontSize: 16,
          } ,
          [theme.breakpoints.between('md', 'lg')]: {
              fontSize: 18,
          },
          [theme.breakpoints.between('lg', 'xl')]: {
              fontSize: 22,
          },
      },
      
       
}))