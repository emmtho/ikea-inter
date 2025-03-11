import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Navbar = () => {

    const handleClick = () => {
        console.log('click');
    };

    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div">
                Emmas Shopping Space
            </Typography>
            <Button color="inherit">Listing</Button>
            <Button color="inherit">Add</Button>
            </Toolbar>
        </AppBar>
    );
};
