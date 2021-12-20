import { Card, CardContent,
        CardMedia, Typography }
        from '@material-ui/core';
import birthDayLogo from '../../images/birthDayLogo.jpg';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CelebrationIcon from '@mui/icons-material/Celebration';

const myFontSize = 13;

const DisplayAge = (props) => {
    return (        
            
        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: '#CBD4CD', height:'40%'}}>
            <CardMedia
                component="img"                
                height='100px'
                image={birthDayLogo}
                alt="my age"
            />            

            <CardContent style={{display:'flex'}} >
                <EmojiObjectsIcon />
                <Typography style={{fontSize : myFontSize}} component="div" >
                    {`You are ${props.years} years,
                    ${props.months} months, and ${props.days} days old
                    or total ${props.daysOnly} days old.  `}
                </Typography>      
            </CardContent>

            <CardContent style={{display:'flex'}} >
                <CakeIcon />
                <Typography style={{fontSize : myFontSize}} component="div">Birthday Countdown...</Typography>
            </CardContent>
            <CardContent style={{display:'flex'}} >
                <HourglassTopIcon />
                <Typography style={{fontSize : myFontSize}} component="div" >
                    {`Only ${props.bDayCountMonths} months and
                        ${props.bDayCountDays} days
                        or total ${props.bDayCountDaysOnly} days
                        to go to your birthday.`}
                </Typography>
                <CelebrationIcon /> 
            </CardContent> 
                     
            
            
        </Card>
       
        
    )
}

export default DisplayAge
