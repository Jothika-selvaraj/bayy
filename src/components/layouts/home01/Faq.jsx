import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently active FAQ
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="faq-container">
      {/* Left Side Content */}
      <div className="faq-content">
        <h2 className="faq-title">Frequently Asked <span>Question</span></h2>
        <p className="faq-description">
          Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional.
        </p>
        <ul className="faq-list">
          <li>Communicate orthogonal process</li>
          <li>Professionally grow cutting-edge paradigms</li>
          <li>Communicate orthogonal process</li>
          <li>Professionally grow cutting-edge paradigms</li>
        </ul>
        <button className="more-button">More About</button>
      </div>

      {/* Right Side FAQ */}
      <div className="faq-section">
        <div className="faq-item">
          <div className={`faq-question ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleFAQ(0)}>
            Is the class schedule suitable for me?
            <span>{activeIndex === 0 ? '-' : '+'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              Yes, our class schedule is flexible, allowing you to choose times that work best for you.
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className={`faq-question ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
            How do I begin?
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              You can begin by signing up on our platform and choosing your preferred courses.
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className={`faq-question ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
            Are these classes pre-recorded?
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              Some classes are live, while others are pre-recorded for your convenience.
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className={`faq-question ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleFAQ(3)}>
            Where is the headquarter of your business?
            <span>{activeIndex === 3 ? '-' : '+'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer">
              Our headquarters is located in [City, Country].
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
