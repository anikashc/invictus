import './FaqListStyles.css'

const FaqList = (props) => {
  const faqs = props.faqs;

  return (
    <div className="faq-list">
      {
        faqs.map((faq) => (
          <div className="faq-preview" key={faq.id}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))
      }
    </div>
  );
}

export default FaqList;