import React from 'react'
import { Footer, Optimize } from '../components'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className="upper__contact">
        <h1>Get In Touch Now</h1>
      </div>
      <div className="contact__info">
        <div className="left-contact__info">
          <h2>Contact Us</h2>
          <div className="all__contact">
            <div className="adress">
              <h4>Address:</h4>
              <p>10151, lefferts blvd, south richmond hill, ny 11419.</p>
            </div>
            <div className="email">
              <h4>Email:</h4>
              <p>manhaglobalinc@gmail.com</p>
            </div>
            <div className="phone">
              <h4>Follow Us:</h4>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="right-contact__info">
          <h3>Reach out to us for any inquiries or dispatch service requests. Our team is ready to assist you.</h3>
          <form>
            <label>Full Name <sup>*</sup></label>
            <input type="text" placeholder='Enter your name' />
            <label>Email<sup> *</sup></label>
            <input type="text"  placeholder='Enter your email'/>
            <label>Message <sup> *</sup></label>
            <textarea name="" className="text-area" id="text-area" placeholder="Message"></textarea>
            <button type='submit' className='submit__btn'>Send Message</button>
          </form>
        </div>
      </div>
      <Optimize />
      <Footer />
    </div>
  )
}
