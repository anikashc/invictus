import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [current, setCurrent] = React.useState('coding');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        style = {{background:'#D66496', color:'white', fontFamilt:'Rajdhani', width:'160px'}}
      >
        {current}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick = {() => {props.onClick('coding'); setCurrent('coding');setAnchorEl(null);}}>
          <ListItemText primary="Coding"/>
        </MenuItem>
        <MenuItem onClick = {() => {props.onClick('electronics'); setCurrent('electronics');setAnchorEl(null);}}>
          <ListItemText primary="Electronics" />
        </MenuItem>
        <MenuItem onClick = {() => {props.onClick('games'); setCurrent('games');setAnchorEl(null);}}>
          <ListItemText primary="Games" />
        </MenuItem>
        <MenuItem onClick = {() => {props.onClick('informative'); setCurrent('informative');setAnchorEl(null);}}>
          <ListItemText primary="Informative" />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}