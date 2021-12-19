import { Box, Typography } from '@material-ui/core';

const Description = () => {
    return (
        <Box >
            <Typography variant='body1'>How to calculate age on paper?</Typography>
            <Typography 
               
                style={{ wordWrap: "break-word", fontSize: 12 }}>
                    Detail
                
            </Typography>
        </Box>
    )
}

export default Description
