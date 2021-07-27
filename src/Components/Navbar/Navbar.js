import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Typography,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Logo from '../../assets/Logo.png'


const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
                  <Typography variant="h6" className={classes.title} color="inherit" >
                      <img src={ } alt="Techra Households" height="25px" classname={ classes.image}/>
Techra Households
                  </Typography>
                  <div className={classes.grow} />
                  <div className={classes.button}>
                      <IconButton aria-label="Show cart Items" color="inherit">
                          <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                          </Badge>
                          
                  </IconButton>
                  </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
