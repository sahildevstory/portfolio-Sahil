import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactcss from './../Contact/Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3sp7cor', 'template_yz7i2sr', e.target, 'kY7x-u3lVfj--_NAZ')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('An error occurred, please try again.');
      });
  };

  return (
    <div id='contact' className={`${contactcss.ContactWrapper} section`}>
      <h3 className='sectionheading'>
        <i className='ri-shining-fill'>Contact</i>
      </h3>
      <h1 className='section_Title'>Let's Collaborate <br /> Could Grow Together</h1>

      <form onSubmit={handleSubmit}>
        <div className={contactcss.inputWrapper}>
          <div className={contactcss.input_Container}>
            <input
              type="text"
              name="name"
              placeholder='Introduce with your name *'
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className={contactcss.input_Container}>
            <input
              type="text"
              name="subject"
              placeholder='Regards subjects*'
              value={form.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={contactcss.inputWrapper}>
          <div className={contactcss.input_Container}>
            <input
              type="email"
              name="email"
              placeholder='Enter your work Email*'
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={contactcss.input_Container}>
            <input
              type="text"
              name="subject"
              placeholder='Regards subjects*'
              value={form.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <textarea
          name="message"
          placeholder='Message'
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className={contactcss.contactDetails}>
        <div className={contactcss.card}>
          <h3>Location <span>Bhopal MP</span></h3>
        </div>

        <div className={contactcss.card}>
          <h3>Phone <span>+91-8982844484</span></h3>
        </div>

        <div className={contactcss.card}>
          <h3>Email <span>sahil.khan44484@gmail.com</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
