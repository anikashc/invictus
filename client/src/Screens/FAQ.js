import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core'
import FaqList from '../Components/FaqList/FaqList';
import Box from '@material-ui/core/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const useStyles= makeStyles({
    root:{
        background: '#1B1430',/* fallback for old browsers */
        background: '-webkit-linear-gradient(to top, #3c1053, #ad5389)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to top,#642A7F, #1B1430)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
        height: '100vh',
        paddingTop: '80px',
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


const FAQ = () => {

    const [faqs, setFaqs] = useState([
        {
            question: 'What if I’ve never been to a hackathon before?',
            answer: "Perfect! We welcome hackers of all experience levels and backgrounds. We will be providing resources and workshops to help new hackers get started on projects and learn new technologies. There will also be mentors at the event to help guide you.",
            visible: false,
            id: 1
        },
        {
            question: 'Can I come with a project pre-built or will I have to build from scratch?',
            answer: "You will be building your project from scratch. However, feel free to come with ideas of what you want to build!",
            visible: false,
            id: 2
        },
        {
            question: 'What events Invictus?',
            answer: "Invictus is the TechFest of DTU Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum? ",
            visible: false,
            id: 3
        },
        {
            question: 'What is Invictus?',
            answer: "Invictus is the TechFest of DTU",
            visible: false,
            id: 4
        }
    ]);

    const toggleFaq = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }))
    };

    const classes= useStyles();

    return (
        <div className={classes.root}>
        <div className="faq-section" >
            <Box className={classes.header} data-aos="zoom=in">F . A . Q</Box>
            <div className="faq-list" data-aos="fade-up">
                {faqs.map((faq, index) => (
                    <FaqList
                        faq={faq}
                        index={index}
                        toggleHandler={toggleFaq}
                        key={faq.id}
                    />
                ))}
            </div>

        </div>
        </div>
    );

}

export default FAQ;
