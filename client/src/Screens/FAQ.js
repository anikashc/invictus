import { React, useState } from 'react';
import FaqList from '../Components/FaqList/FaqList';

const FAQ = () => {

    const [faqs, setFaqs] = useState([
        {
            question: 'Why Invictus?',
            answer: "Invictus is the TechFest of DTU",
            visible: false,
            id: 1
        },
        {
            question: 'Team size Invictus?',
            answer: "Invictus is the TechFest of DTU",
            visible: false,
            id: 2
        },
        {
            question: 'What events Invictus?',
            answer: "Invictus is the TechFest of DTU",
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
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '90px 50px 15px 15px'
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
        <div className="faq-page">
            <h1 style={hStyle}>F<span style={spanStyle}>.</span>A<span style={spanStyle}>.</span>Q<span style={spanStyle}>.</span></h1>
            <div className="faq-section">
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
    );

}

export default FAQ;
