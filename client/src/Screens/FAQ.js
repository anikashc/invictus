import { React, useState } from 'react'
import FaqList from '../Components/FaqList/FaqList'


const FAQ = () => {

    const [faqs] = useState([
        { question: 'What is Invictus?', answer: "Invictus is the TechFest of DTU", id: 1 },
        { question: 'What is Invictus?', answer: "Invictus is the TechFest of DTU", id: 2 },
        { question: 'What is Invictus?', answer: "Invictus is the TechFest of DTU", id: 3 },
        { question: 'What is Invictus?', answer: "Invictus is the TechFest of DTU", id: 4 }
    ]);

    const hStyle = {
        textAlign: 'center'
    };

    return (
        <div className="faq-section">
            <h1 style={hStyle}>FAQ Section</h1>
            <FaqList faqs={faqs} />
        </div>
    )
}

export default FAQ
