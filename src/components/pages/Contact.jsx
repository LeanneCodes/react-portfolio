import React from 'react';
import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../styles/Contact.css';

const Contact = () => {
  return (
    // contact info
    <div className='contact-container container-fluid'>
      <div>
        <h1>Contact Me</h1>
        <div className='d-flex flex-row justify-content-around'>
          <div className='contact-info'>
            <div className='contact-icon'>{<FaPhone />}</div>
            <p>Contact No.</p>
            <p>+44 (0)74 963 55 196</p>
          </div>
          <div className='contact-info'>
            <div className='contact-icon'>{<MdAlternateEmail />}</div>
            <p>Email</p>
            <p>leannemgoldsmith@gmail.com</p>
          </div>
          <div className='contact-info'>
            <div className='contact-icon'>{<FaGithub />}</div>
            <p>GitHub</p>
            <p><a href="https://github.com/LeanneCodes" target='_blank'>LeanneCodes</a></p>
          </div>
          <div className='contact-info'>
            <div className='contact-icon'>{<FaLinkedin />}</div>
            <p>LinkedIn</p>
            <p><a href="https://www.linkedin.com/in/leanne-m-goldsmith/" target='_blank'>Leanne Goldsmith</a></p>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div>
        <div>
          <h2>Have a question?</h2>
          <h4>Send me a message</h4>
        </div>
        <div class="row mt-5">
          <div class="col">
            <input type="text" class="form-control" placeholder="Name" aria-label="Name" />
          </div>
          <div class="col">
            <input type="email" class="form-control" id="inputEmail4" placeholder='Email Address' />
          </div>
        </div>
        <div className='row mt-3'>
          <div>
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="5"></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div class="col">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact