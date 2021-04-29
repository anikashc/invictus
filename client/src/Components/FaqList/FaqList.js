import './FaqListStyles.css'

const FaqList = (props) => {
  const faqs = props.faqs;

  return (
    <div className="faq-list">
      {
        faqs.map((faq) => (
          <div className="faq-preview" key={faq.id}>
            <h4><span>Q.</span> {faq.question}</h4>
            <p><span>A.</span> {faq.answer}</p>
          </div>
        ))
      }
    </div>
  );
}

export default FaqList;