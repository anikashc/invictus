import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: '600px',
    height: '600px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
    '@media (max-width: 900px)':{   
      width: '500px',
      height: '500px',
    },
    '@media (max-width: 600px)':{   
      width: '300px',
      height: '300px',
    },
    '@media (max-width: 430px)':{   
      width: '300px',
      height: '300px',
    },
    '@media (max-width: 320px)':{   
      width: '250px',
      height: '250px',
    },
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function WhatsNewModel() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => { 
    let pop_status = localStorage.getItem('pop_status');
    if(!pop_status){
      setOpen(true);
      console.log(open)
      localStorage.setItem('pop_status',1);
    }
  },[open]);



  const handleOpen = () => {
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div >
            <img src="https://picsum.photos/600" alt="1" className={classes.paper}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
