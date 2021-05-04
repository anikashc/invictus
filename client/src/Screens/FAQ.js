import { React, useState } from 'react';
import FaqList from '../Components/FaqList/FaqList';

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

    const hStyle = {
        display: 'block',
        position: 'relative',
        textAlign: 'center',
        padding: '5%',
        marginBottom: '20px',
        maxWidth: 'inherit',
        boxSizeing: 'border-box'
    };

    const spanStyle = {
        color: 'blue',
        paddingLeft: '2px',
        paddingRight: '10px'
    }

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

    return (
        // <div className="faq-page">
        <div className="faq-section">
            <h1 style={hStyle}>F<span style={spanStyle}>.</span>A<span style={spanStyle}>.</span>Q<span style={spanStyle}>.</span></h1>

            <div className="faq-list">
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
        // </div>
    );

}

export default FAQ;
