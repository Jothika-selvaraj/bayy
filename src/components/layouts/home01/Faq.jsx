import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Dummy data for FAQ items
  const faqData = [
    {
      question: "Is the class schedule suitable for me?",
      answer: "Yes, our class schedule is flexible, allowing you to choose times that work best for you."
    },
    {
      question: "How do I begin?",
      answer: "You can begin by registering an account with us and selecting the courses you are interested in."
    },
    {
      question: "Are these classes pre-recorded?",
      answer: "No, our classes are conducted live to provide the best interaction between students and instructors."
    },
    {
      question: "Where is the headquarter of your business?",
      answer: "Our headquarter is located in New York City, USA."
    }
  ];

  // Toggle the active index for showing and hiding FAQ answers
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);  // Close if clicked again
    } else {
      setActiveIndex(index);  // Open the clicked one
    }
  };

  return (
    <section className="faq-section py-12 bg-darkblue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold uppercase">FAQ</span>
          <h2 className="text-3xl font-bold mt-2">
            Frequently Asked <span className="text-red-500">Question</span>
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${activeIndex === index ? 'bg-red-500' : 'bg-gray-800'} transition-colors duration-300`}>
              <button style={{backgroundColor:'rgb(31 41 55)'}}
                className="flex items-center justify-between w-full text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}>
                <span className="flex items-center text-lg font-semibold">
              
                  {item.question}
                </span>
                <span className="text-2xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-sm text-white">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;


// import React, { useState } from 'react';

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Dummy data for FAQ items
//   const faqData = [
//     {
//       question: "Is the class schedule suitable for me?",
//       answer: "Yes, our class schedule is flexible, allowing you to choose times that work best for you."
//     },
//     {
//       question: "How do I begin?",
//       answer: "You can begin by registering an account with us and selecting the courses you are interested in."
//     },
//     {
//       question: "Are these classes pre-recorded?",
//       answer: "No, our classes are conducted live to provide the best interaction between students and instructors."
//     },
//     {
//       question: "Where is the headquarter of your business?",
//       answer: "Our headquarter is located in New York City, USA."
//     }
//   ];

//   // Toggle the active index for showing and hiding FAQ answers
//   const toggleAccordion = (index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);  // Close if clicked again
//     } else {
//       setActiveIndex(index);  // Open the clicked one
//     }
//   };

//   return (
//     <section className="faq-section py-12 bg-darkblue text-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <span className="text-red-500 font-semibold uppercase">FAQ</span>
//           <h2 className="text-3xl font-bold mt-2">
//             Frequently Asked <span className="text-red-500">Question</span>
//           </h2>
//         </div>

//         <div className="space-y-4 max-w-2xl mx-auto">
//    {faqData.map((item, index) => (
//     <div
//        key={index}
//       className={`p-4 rounded-lg ${activeIndex === index ? '' : 'hover:bg-white'}`}> {/* Removed background colors */}
//       <button
//         className="flex items-center justify-between w-full text-left focus:outline-none"
//         onClick={() => toggleAccordion(index)}>
//         <span className="flex items-center text-lg font-semibold">
//           {item.question}
//         </span>
//         <span className="text-2xl">
//           {activeIndex === index ? '-' : '+'}
//         </span>
//       </button>
//       {activeIndex === index && (
//         <div className="mt-2 text-sm text-black"> {/* Change text color for better contrast */}
//           {item.answer}
//         </div>
//       )}
//     </div>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// };

// export default Faq;
