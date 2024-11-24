import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const StudyForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    if(window.confirm("Are you sure you want to send this inquiry?")){ 
      emailjs.sendForm(
        'service_jz3d31c', 
        'template_avspnq3', 
        form.current, 
        '2CBV5usGCJRMr4WbB'
      )
      .then((result) => {
          alert("Your inquiry has been sent!")
          navigate("/")
      }, (error) => {
          alert("Your message could not be sent. Please try again.")
      });
    }
  };

  return (
    <form className='ui inverted form' ref={form} onSubmit={sendEmail}>
                                        <div className='equal width fields'>

      <div className='field'>
        <label>Name</label>
        <div className="ui left icon input">
            <i className="user icon"></i>
            <input type='text' placeholder='Name' name="from_name" required/>
        </div>
      </div>
      <div className='field'>
        <label>Email</label>
            <div className="ui left icon input">
                <i className="mail icon"></i>
                <input type="email" name="reply_to" required placeholder='Email'/>
            </div>
      </div>   
      <input 
        type="hidden" 
        name="message" 
        value="Requesting more information about one-on-one lessons with Kabayun"
      />
      </div>
      <button className='ui circular fluid large violet submit button' type="submit">
        Inquire About Private Lessons
      </button>
    </form>
  );
};

export default StudyForm;
