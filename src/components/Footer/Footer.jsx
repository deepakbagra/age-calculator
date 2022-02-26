import { Box, Typography } from "@material-ui/core";
import useStyle from './styles';

const Footer = () => {
    const classes = useStyle();

    return (
        <Box position='static' alignItems='center'
            justifyContent='center' m='auto' className={classes.root}>
            <Typography className={classes.text}>
                {new Date().getFullYear()}  
                {'Copyright © '}
                | computemyage.com | All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default Footer
