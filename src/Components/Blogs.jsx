import React, { useState } from 'react';
import './Blogs.css'; 

const Blogs = () => {
  const faqData = [
    {
      question: 'What is Digital Marketing',
      answer: 'Digital Marketing is the online marketing of your product services and your brand. We are a well-known Digital Marketing Company in Bhiwadi.',
    },
    {
      question: 'For Your Needs, We Are the Best Digital Marketing Agency in Delhi.',
      answer: 'IFISYS is a trusted Digital Marketing Agency in Delhi for a very long time. We are committed to our clients’ interests and have earned their trust. We take the time to understand the client’s business before we begin any Digital Marketing assignment. We do this to ensure that we don’t just follow the instructions of our clients but also to offer our valuable suggestions to help them achieve the best possible ROI on their Digital Marketing activities.',
    },
    {
      question: 'Digital Marketing Activities',
      answer: 'The team at our Digital Marketing Company has extensive experience in managing Digital Marketing activities across different industries. We know what Digital Marketing activities should be done for each client. We create a detailed 6 month plan to carry out Digital Marketing activities before we begin a Digital Marketing assignment. We define the type of Digital Marketing activities that we will be performing, the areas we will concentrate on and how our Digital Marketing strategy will evolve over time. Then, we begin to execute our Digital Marketing Strategy. We then closely analyze the results of our Digital Marketing Activities in order to make sure they are exactly what we expected. If something does not work out, we update our plan and focus on the best practices, then refine it further. We are always assessing the effectiveness of our digital marketing activities, and updating our strategy according to the results. You can rest assured that your Digital Marketing Activities will be done in the most professional manner when you partner with the Delhi NCR’s best Digital Marketing Agency.',
    },
    {
      question:"Why should you choose us as your digital marketing agency in Delhi.",
      answer:"IFISYS is a leading Website Development company in Delhi. We can help you with all your Digital Marketing needs. We understand your business, which is what sets us apart. Our team has worked with many online businesses and also managed our own websites. We have all the experience and knowledge to fully understand your business and create a Digital Marketing Plan specifically tailored for you. The areas we feel will bring the most success for your business will be highlighted in our Digital Marketing Plan. Many other Digital Marketing Agencies simply follow the same Internet Marketing Plan that is used for every client. IFISYS will customize the Digital Marketing Activities for you. Because we have unique digital marketing skills, our clients are able to drive their businesses for years. This is why they stay with us over time."
    },
    {
      question:"What Kind of Digital Marketing Activities Do We Use",
      answer:"Digital Marketing Activities are numerous and growing. We are one of the leading Digital Marketing Agencies in Delhi. We know everything about Digital Marketing.Pay Per Click Management:- Our team includes Google Certified Ad words Professionals, who can manage all aspects of Performance Marketing. Our team is able to manage all aspects of Ad Management, including Google Ads and Facebook Ads as well as Instagram Ads and Twitter Ads.Social Media Marketing:- Our team is made up of young professionals who spend most of their time social media marketing. They know how to create viral Social Media posts. Our team has mastered the art of managing Facebook, Twitter and LinkedIn as well as Instagram, Snapchat, WhatsApp, Google+, Instagram, Google+ and Google+. Our team is able to advise you on the best times to post and how often to post. They also know which formats are best (meme, video or gifs), as well as the best ways to post. With our Social Media Marketing Skills, our Team will make magic for you."
    }
    // Add more Blogs entries here
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container mx-5">
      <text></text>
      <p className='text-warning text-start fw-bold'>Get Answer</p>
      <h1 className='fw-bold text-start display-5 mb-5'>FAQ'S</h1>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item shadow ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="question"
            onClick={() => toggleQuestion(index)}
          >
            <span className="toggle-icon d-flex">
              <div className='border rounded-circle bg-danger position-stick'><h1 className='text-light '>{ activeIndex === index ? '-' : '+'}</h1></div>              
              <h5 className='b-color fw-bold col ms-3'>{faq.question}</h5>
            </span>
          </div>
          <p className="answer text-muted text-center">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
