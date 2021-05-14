import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import './form.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    borderRadius:'8px',
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const url = 'https://invictusdtu.us1.list-manage.com/subscribe/post?u=0fd31f349901f079193ff9979&amp;id=3a57b1055c'
  const SimpleForm = () => <MailchimpSubscribe url={url}/>

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
      <center>
        <div className={classes.paper+' subscribe'}>
          <h2 className='formTitle'>Subscribe</h2>
          <p className='formText'>Subscribe to get the latest news & updates.</p>
          
          <MailchimpSubscribe url={url}/>
        </div>
        </center>
      </Fade>
    </Modal>
  );
}