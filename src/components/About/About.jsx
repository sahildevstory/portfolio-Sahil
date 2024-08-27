import React from 'react'
import aboutcss from './../About/About.module.css'
import aboutImg1 from './../../assets/01.jpeg'
import aboutImg2 from './../../assets/02.png'
import aboutImg3 from './../../assets/03.png'
import aboutImg4 from './../../assets/04.png'

const About = () => {
  return (
    <div id='about' className={`${aboutcss.AboutWrapper} section`}>
         <h3 className='sectionheading'>
            <i className='ri-shining-fill'>About Me</i>
        </h3>
        <h1 className='section_Title'>Turning Complex Problems Into <br /> Small Code and Designs.</h1>

        <div className={aboutcss.experienceWrapper}>
        <div className={aboutcss.experienceCard}>
            <h2><span>+3</span>Months of Experience</h2>
        </div>

        <div className={aboutcss.experienceCard}>
            <h2><span>+10</span>Projects of Web Dev Done</h2>
        </div>

        <div className={aboutcss.experienceCard}>
            <h2><span>+3</span>Projects of Native App Done</h2>
        </div>
        </div>

        <p>"Hello, I'm Sahil Khan, a computer science graduate with a passion for full-stack development. I specialize in both frontend and backend technologies, holding certifications in C++, JavaScript, and frontend development. My expertise includes the MERN stack and Python's Django framework.</p>
        <p>I've completed several projects, such as a MERN Blog platform and a Resume Builder app, which have sharpened my technical skills and teamwork abilities. I'm also focused on UI/UX design to craft user-friendly applications.</p>
        <p>If you're looking for a driven full-stack developer with experience in MERN, Django, and UI/UX, let's connect! Reach out at <strong>sahil.khan44484@gmail.com</strong>."</p>

        <div className={aboutcss.aboutCards}>
            <div className={aboutcss.aboutCard}>
                <div className={aboutcss.content}>
                    <h2>FullStack Development</h2>
                    <p><span>MERN</span><span>Python+Django</span>
                    
                    </p>
                    </div>
                    <img src={aboutImg1} alt="about1" />
            </div>

            <div className={aboutcss.aboutCard}>
                <div className={aboutcss.content}>
                    <h2>Frontend Development</h2>
                    <p><span>React</span><span>Tailwind CSS</span>
                    <span>Shadcn</span>
                    </p>
                   
                </div>
                <img src={aboutImg2} alt="about2" />
            </div>

            <div className={aboutcss.aboutCard}>
                <div className={aboutcss.content}>
                    <h2>Backend Development</h2>
                    <p><span>NodeJs</span><span>Python+Django</span>
                    <span>Firebse/Appwrite</span>
                    </p>
                </div>
                <img src={aboutImg3} alt="about3" />

            </div>

            <div className={aboutcss.aboutCard}>
                <div className={aboutcss.content}>
                    <h2>App Development</h2>
                    <p><span>React Native</span><span>Nativewind</span>
                    <span>postgresql</span>
                    </p>
                </div>
                <img src={aboutImg4} alt="about4" />
            </div>
        </div>
    </div>
  )
}

export default About