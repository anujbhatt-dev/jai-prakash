import faqs from "../data/faqs";

export function FaqSection() {
  return (
    <section className="section faq-section" id="faqs" aria-labelledby="faqs-title">
      <div className="section-inner faq-layout">
        <header className="faq-intro">
          <p className="eyebrow"><span>07</span> In brief</p>
          <h2 id="faqs-title">A few useful <em>answers.</em></h2>
          <p>Learn more about Maharshi Navendu, his books and the material preserved in this archive.</p>
        </header>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <span className="faq-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className="faq-copy">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
