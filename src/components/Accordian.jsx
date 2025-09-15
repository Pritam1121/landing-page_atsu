import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set default open accordion to the second item (index 1)

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked again
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  const accordionData = [
    { question: 'What is SEO?', answer: 'SEO stands for Search Engine Optimization. It is the practice of optimizing a website to rank higher in search engine results.' },
    { question: 'Why is SEO important?', answer: 'SEO helps improve visibility and organic search traffic, which can result in higher conversion rates and business growth.' },
    { question: 'How can I improve my SEO?', answer: 'Improving SEO involves keyword research, creating high-quality content, optimizing on-page elements, and building backlinks.' },
    { question: 'What are the benefits of using SEO?', answer: 'SEO can bring long-term results, increase web traffic, enhance user experience, and improve brand credibility.' }
  ];

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-md shadow-md">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-900 text-white hover:bg-gray-700 rounded-md focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-semibold">{item.question}</span>
              <span className={`transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-700 text-white rounded-b-md">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
