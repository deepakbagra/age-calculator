import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import useStyles from './styles';

const SocialMedia = () => {
    const classes = useStyles();    
    
    return (
        <box className={classes.socialWrapper}>

            <a  href="https://www.facebook.com/deepak.sharma.jp/" rel="noreferrer" target="_blank">
                <FacebookIcon  className={classes.socialLinkWrapper} />
            </a>
            <a href="https://linkedin.com/in/DeepakSharma3409/" rel="noreferrer" target="_blank">
                <LinkedInIcon className={classes.socialLinkWrapper} />
            </a>
            <a href="https://github.com/deepakbagra/" rel="noreferrer" target="_blank">
                <GitHubIcon className={classes.socialLinkWrapper} />
            </a>
        </box>
    )
}

export default SocialMedia
