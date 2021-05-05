import React from 'react';
import Navbar from "./Navbar";
import CustomDrawer from "./Drawer";
import { useStyles } from './HeaderStyles';

export default function Header() {      
  
  const classes = useStyles();
  
  //drawer state
  const [open, setOpen] = React.useState(false);                
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.head} style = {{zIndex:1100}}>
      <Navbar isOpen = {open} opener = {handleDrawerOpen}/>
      <CustomDrawer isOpen = {open} closer = {handleDrawerClose} />
    </div>
  );
}
