import { React } from 'react';
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import './Team.css';
import TeamData from './TeamData';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const useStyles= makeStyles({
    root:{     
        background: '#1B1430',/* fallback for old browsers */
        background: '-webkit-linear-gradient(to top, #3c1053, #ad5389)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to top,#642A7F, #1B1430)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: '100%',
        width: '100%',
        '@media: (max-width: 800px)': {
        paddingTop: '20%',
        }
    },header:{  
        paddingTop: '20px',
        color: '#FFFFFF', 
        fontSize: '4rem',
        textAlign: 'center',
        fontFamily: 'Rajdhani',
        fontStyle: 'normal',
        fontWeight: 'bold',
        '@media (max-width: 1130px)':{
          fontSize: '3.5rem',    
          lineHeight:'20px',
        },
        '@media (max-width: 1024px)':{
        fontSize: '3rem',    
        lineHeight:'15px',
      },
      '@media (max-width: 768px)':{
        fontSize: '2.5rem',    
        lineHeight:'10px',
      },
    },
})


const Team = (props) => {
const classes=useStyles();

    return (
        <div className={classes.root}>

            <Box className={classes.header} data-aos="zoom-in">MEET THE TEAM</Box>
            <main className="page-content">
                {TeamData.map((val) => {

                    return (
                        <>
                            <div className="card"  data-aos="zoom-in" style={{ backgroundImage: `url(${val.imgsrc})`}} >
                                <div className="content">
                                    <h2 className="title">{val.designation} </h2>
                                    <p className="copy"> {val.MebName}</p>
                                    <div>
                                        <a href={val.linkedin} target="_blank"><button className="butn" > <i className="bi bi-linkedin"></i> </button> </a>
                                        <a href={val.instagram} target="_blank">  <button className="butn"  ><i className="bi bi-envelope-fill"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )


                })}

            </main>
        </div>
    )
}


export default Team;
