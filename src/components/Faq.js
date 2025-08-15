import React from "react";
import "../styles/Faq.css";
import "../../src/App.css";
import faqData from "../data/faqData.json";

export default function Faq() {
  // Show only first 3 FAQs
  const displayedFaqs = faqData.slice(0, 3);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {displayedFaqs.map((faq, index) => (
            <div className="accordion-item faq-card" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
