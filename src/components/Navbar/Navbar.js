import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/circles.png';
import useStyles from './styles';
import { Grid, InputAdornment, Input, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({totalItems,handleSearch}) => {
    const classes = useStyles();
    const location = useLocation();    
    return (
        <div>
         <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
            <img src="https://htmldemo.net/boighor/boighor/images/logo/logo.png" alt="Book Store App" height="50px" className={classes.image} /> 
          </Typography>

    
    {/* The search input bar for the searching */}

     <div className='bg-white w-50'>
     <div className={classes.searchs}>
        <Input
          className={classes.searchb}
          type="text"
          placeholder="Search hello..."
          onChange={(event) => {
              handleSearch(event.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
     </div>

            <div className={classes.grow} />
            {location.pathname === '/' && (
            <div className={classes.button}>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
            
        </div>
    )
}

export default Navbar
