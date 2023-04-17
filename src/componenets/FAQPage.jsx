import React, { useState } from "react";

const FAQPage = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is your aim to work in this Company?",
      answer:
        "My aim is to contribute to the company by using my skills and knowledge to help achieve its goals and objectives.",
    },
    {
      id: 2,
      question: "What do you think you can do for the Company?",
      answer:
        "I believe I can bring value to the company by leveraging my experience and expertise to solve problems and drive innovation.",
    },
    {
      id: 3,
      question: "In 5 years of time, how would you imagine yourself to be?",
      answer:
        "My long-term career goal is to become a senior software engineer, where I can continue to develop my technical skills and knowledge, and also mentor and guide junior developers in the team. I am passionate about software engineering and I enjoy learning new programming languages and tools. As I progress in my career, I want to work on complex projects that solve real-world problems and make a positive impact on society.",
    },
    {
      id: 4,
      question:
        "What are the Top 3 questions you would like to ask the Company?",
      answer:
        "1.How long does the recruitment process take?\n2. How does the company approach employee development and growth?\n3. What are the company's biggest challenges and how can I contribute to solving them?",
    },
  ];

  const handleClick = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="faq-page text-center">
      <h1 className="text-3xl font-bold  mb-5">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <button className="faq-question " onClick={() => handleClick(index)}>
            {faq.question}
          </button>
          <div className={`faq-answer ${active === index ? "active" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
