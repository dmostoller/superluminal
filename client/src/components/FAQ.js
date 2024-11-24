import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const faqItems = [
    {
      title: 'How much does do private lessons cost?',
      content: 'Lessons are priced at $75 per hour, and the price includes not only the lesson time, but also presets and samples if the student wants them, as well as feedback on your music whenever you want it (within reason).  Discounts are available for bulk bookings and long-term commitments. Contact us for more information and to discuss your specific needs and goals.'
    },
    {
      title: 'Do I need to already have experience?',
      content: 'Lessons are tailored to your individual needs and goals, whether you are a beginner or an experienced producer. Kabayun will work with you to create a personalized lesson plan that will help you realize your full potential.'
    },
    {
      title: 'Do you have flexible payment options?',
      content: 'Yes, we offer flexible payment options to suit your needs. Contact us and we will work with you to create a payment plan that works for you.'
    },
    {
      title: 'Do I need any specific equipment to take the courses?',
      content: 'No, you do not need any specific equipment to take the courses, other than a computer and an internet connection, and a passion for music production.'
    },
    {
      title: 'What software do I need?',
      content: 'If you dont have one already, Kabayun will help get you set up with a digital audio workstation (DAW) such as Ableton Live, Cubase, or Bitwig.'
    },
    {
      title: 'What if I only need help on something specific?',
      content: 'No problem! Whether you need help with sound design, mixing and mastering, arrangement and composition, or any other aspect of music production, Kabayun will work with you to create a lesson plan that meets your needs.'
    },
    {
      title: 'I dont have money right now, do you have any free content?',
      content: 'Yes! We offer a range of free tutorials and resources to help you get started on your music production journey. Check out our free tutorials on the video page!'
    }
  ];

  return (
    <div className='ui cente text container' style={{ marginTop: "75px", marginBottom: "25px" }}>
      <h1 className='ui center aligned inverted header'>Frequently Asked Questions</h1>
      <div className='ui center aligned grid' style={{marginTop: "50px"}}>
      <Accordion styled inverted>
        {faqItems.map((item, index) => (
          <React.Fragment key={index}>
            <Accordion.Title
              active={activeIndex === index}
              index={index}
              onClick={handleClick}
            >
              <Icon name='dropdown' />
              {item.title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
              <p style={{color: 'white'}}>{item.content}</p>
            </Accordion.Content>
          </React.Fragment>
        ))}
      </Accordion>
    </div>
    </div>
  );
};

export default FAQ;