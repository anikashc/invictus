import React from 'react';
import './FaqListStyles.css';

const FaqList = ({ faq, index, toggleHandler }) => {

  return (
    <div
      className={"faq" + (faq.open ? " open" : "")}
      key={index}
      onClick={() => toggleHandler(index)}
    >
      <div className={"faq-question" + (faq.open ? " active" : "")}>
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  );
}

export default FaqList;