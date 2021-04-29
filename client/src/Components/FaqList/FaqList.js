import './FaqListStyles.css'

const FaqList = (props) => {
  const faqs = props.faqs;

  return (
    <div className="faq-list">
      {
        faqs.map((faq) => (
          <div className="faq-preview" key={faq.id}>
            <h4>Q{faq.id}: {faq.question}</h4>
            <p>Ans: {faq.answer}</p>
          </div>
        ))
      }
    </div>
  );
}

export default FaqList;