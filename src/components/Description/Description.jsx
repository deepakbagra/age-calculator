import { Box, Typography } from '@material-ui/core';
import useStyle from './styles';

const Description = () => {
    const classes = useStyle();
    return (
        <Box >
            <Typography className={classes.wrapHeader}>How Old Am I ?</Typography>

            <Typography paragraph className={classes.wrapContent}>

                It is famously quoted that "Age is just a number".
                I believe this is not merely a number but more than that.
                This number helps you recall your past memory filled with
                good time you have had with your family and friends. The number
                makes you feel proud of yourself with your achievements and
                awards you have earned in these days.
            </Typography>

            <Typography paragraph className={classes.wrapContent}>
                Sometimes, this number realises you what went wrong in the past
                and what could have been done better. You may want to reconsider
                some of the decisions you made earlier and regret later. This number also
                inspires you restart your life aiming to fulfill
                your dreams. Therefore, this is not just a number, but much more than that.
                             
            </Typography>
        </Box>
    )
}

export default Description
