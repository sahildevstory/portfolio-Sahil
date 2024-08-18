import React from 'react'
import contactcss from './../Contact/Contact.module.css'

const Contact = () => {
  return (
    <div className={`${contactcss.ContactWrapper} section`}>
          <h3 className='sectionheading'>
            <i className='ri-shining-fill'>Contact</i>
        </h3>
        <h1 className='section_Title'>Let's Collaborate <br /> Could Grow Together</h1>

        <form>
            <div className={contactcss.inputWrapper}>
                <div className={contactcss.input_Container}>
                    <input type="text" placeholder='Introduce with your name *'/>
                </div>

                <div className={contactcss.input_Container}>
                    <input type="text" placeholder='Regards subjects*'/>
                </div>
                </div>

                <div className={contactcss.inputWrapper}>
                <div className={contactcss.input_Container}>
                    <input type="email" placeholder='Enter you work Email*'/>
                </div>

                <div className={contactcss.input_Container}>
                    <input type="text" placeholder='Regards subjects*'/>
                </div>
            </div>

            <textarea placeholder='Message'></textarea>
            <button>Submit</button>
        </form>

        <div className={contactcss.contactDetails}>
            <div className={contactcss.card}>
                <h3>Location <span>Bhopal MP</span></h3>
            </div>

            <div className={contactcss.card}>
                <h3>phone <span>+91-8982844484</span></h3>
            </div>

            <div className={contactcss.card}>
                <h3>Email <span>sahil.khan44484@gmail.com</span></h3>
            </div>
            
        </div>
    </div>
  )
}

export default Contact