import React from 'react';
import Navbar from "./Navbar";
import CustomDrawer from "./Drawer";
import Form from "./Form";
import { useStyles } from './HeaderStyles';

export default function Header() {      
  
  const classes = useStyles();
  
  //drawer state
  const [open, setOpen] = React.useState(false);    
  const [formOpen, setFormOpen] = React.useState(false);        

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };
  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <div className={classes.head} style = {{zIndex:1100}}>
      <Navbar isOpen = {open} opener = {handleDrawerOpen}/>
      <CustomDrawer isOpen = {open} closer = {handleDrawerClose} handleFormOpen={handleFormOpen}/>
      <Form open={formOpen} handleClose={handleFormClose}/>
    </div>
  );
}
