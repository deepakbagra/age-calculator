import { Card, CardContent,
        CardMedia, Typography }
        from '@material-ui/core';
import birthDayLogo from '../../images/birthDayLogo.jpg';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CelebrationIcon from '@mui/icons-material/Celebration';
import useStyle from './styles';

const DisplayAge = (props) => {
    const classes = useStyle();

    // defining output strings

    // let ageStr = `You are ${props.years} years,
    //             ${props.months} months, and ${props.days} days old
    //             or total ${props.daysOnly} days old.`;
                
    
    return (        
            
        <Card style={{ backgroundColor: '#CBD4CD', height:'40%'}}>
            <CardMedia
                component="img"                
                height='100px'
                image={birthDayLogo}
                alt="my age"
            />
            <CardContent style={{display:'flex'}} >
                <EmojiObjectsIcon />
                <Typography className={classes.wrapText} component="div" >
                    {`You are ${props.years} years,
                    ${props.months} months, and ${props.days} days old
                    or total ${props.daysOnly} days old.`}
                </Typography>      
            </CardContent>

            <CardContent style={{display:'flex'}} >
                <CakeIcon />
                <Typography className={classes.wrapText}
                     component="div">Birthday Countdown...</Typography>
            </CardContent>
            <CardContent style={{display:'flex'}} >
                <HourglassTopIcon />

                <Typography className={classes.wrapText} component="div" >
                { (props.bDayCountMonths === 0 && props.bDayCountDays === 0) ?
                    
                    'Today is your birthday. We wish you a Happy Birthday!' :
                   
                    props.bDayCountMonths !== 0 ? `Only ${props.bDayCountMonths} months and
                    ${props.bDayCountDays} days
                    or total ${props.bDayCountDaysOnly} days
                    to go to your birthday.`
                    : ` Just ${props.bDayCountDaysOnly} days
                    to go to your birthday.`                   
                
                }
                
                </Typography>
                <CelebrationIcon /> 
            </CardContent> 
                     
            
            
        </Card>
       
        
    )
}

export default DisplayAge
