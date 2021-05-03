import React from 'react';
import './FaqListStyles.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const FaqList = ({ faq, index, toggleHandler }) => {

  return (
    <div
      className={"faq" + (faq.open ? " open" : "")}
      key={index}
      onClick={() => toggleHandler(index)}
    >
      <div className={"faq-question" + (faq.open ? " active" : "")}>
        <i className="faq-icon">
          {faq.open ? <RemoveIcon /> : <AddIcon />}
        </i>
        <span>
          {faq.question}
        </span>
      </div>
      <div className="faq-answer">
        <p>
          {faq.answer}
        </p>

      </div>
    </div>
  );
}

export default FaqList;