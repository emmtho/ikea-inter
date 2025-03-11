import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {

    const handleClick = () => {
        console.log('click');
    };

    return (
        <>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div">
                Emmas Shopping Space
            </Typography>
            <Link to="/">
                <Button color="inherit">Listing</Button>
            </Link>
            <Link to="/create">
                <Button color="inherit">Add</Button>
            </Link>
            </Toolbar>
        </AppBar>
        <Outlet />
        </>
    );
};
