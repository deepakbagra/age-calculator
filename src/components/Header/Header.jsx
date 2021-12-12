import { AppBar, Toolbar, ToolBar, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar >
                <Typography variant='h4'>
                    Age Calculator
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
