import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_pz95cma', 'template_r7p3xvj', form.current, 'CUQwPTgVs6AiS1Vrr')
      .then((result) => {
        let status = document.getElementById('message-status');
        if (result.text === 'OK') {
          console.log(result.text);
          console.log("Message sent");
          let message = 'Message successfully sent!';
          status.style.color = 'lightgreen';
          status.innerHTML = message;
          setTimeout(() => {
            status.innerHTML = '';
          }, 3000);
        }
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        let status = document.getElementById('message-status');
        console.log(result.text);
        console.log("Message failed");
        let message = 'Message failed. Please try again.';
        status.style.color = 'lightred';
        status.innerHTML = message;
        setTimeout(() => {
          status.innerHTML = '';
        }, 3000);
      });
  };
  

  return (
    // contact info
    <div className='contact-container container-fluid'>
      {/* contact form */}
      <div className='w-75 mx-auto message-container'>
      <h1 className='mt-4 contact-title'>Contact Me</h1>
        <div className='email-header'>
          <h2 className='message'>Have a question?</h2>
          <h4 className='message'>Send me a message</h4>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="row mt-5">
            <div className="col">
              <input type="text" name="user_name" className="form-control" placeholder="Name" aria-label="Name" required />
            </div>
            <div className="col">
              <input type="email" name="user_email" className="form-control" id="inputEmail4" placeholder='Email' required />
            </div>
          </div>
          <div className='row mt-3'>
            <div>
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="5" required></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <input type="submit" value="Submit" className="submit-btn"/>
              <p id='message-status' className='mt-2'></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact