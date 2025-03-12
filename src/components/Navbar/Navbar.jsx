import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div">
                Emmas Shopping Space
            </Typography>
            <Link to="/" className='nav-buttons'>
                <Button color="inherit">Products</Button>
            </Link>
            <Link to="/create" className='nav-buttons'>
                <Button color="white">Add Products</Button>
            </Link>
            </Toolbar>
        </AppBar>
        <Outlet />
        </>
    );
};
