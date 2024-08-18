import React from 'react'
import resumecss from './../Resume/Resume.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Testimonialimg1 from './../../assets/suraj.jpeg'
import Testimonialimg2 from './../../assets/rohit.jpeg'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Resume = () => {
    return (
        <div className={`${resumecss.ResumeWrapper} section`}>
            <h3 className='sectionheading'>
                <i className='ri-shining-fill'>Education</i>
            </h3>
            <h1 className='section_Title'>Education and <br />Practical Experience</h1>

            <div className={resumecss.EducationWrapper}>
                <h1>My Education</h1>
                <div className={resumecss.education}>
                <small>2020-2024</small>

                    <h3>Bachelors of Technology <span>In Computer science  <strong></strong> </span></h3>
                    <p>I graduated from sirt Excellence in Bhopal MP</p>
                </div>

                <div className={resumecss.education}>
                <small>2019-2020</small>
                    <h3>Excellence Boys School<span> <strong>In PCM</strong> </span></h3>
                    <p>I have done my metriculation from State Board Madhya pradesh</p>
                </div>

                <div className={resumecss.education}>
                <small>2017-2018</small>

                    <h3>Daffodil English High School <span> <strong> </strong> </span></h3>
                    <p>I have done my High school from State Board Madhya pradesh.</p>
                </div>


            </div>

            <div className={resumecss.EducationWrapper}>
                <h1>My Experiences</h1>
                <div className={resumecss.education}>
                <small>Aug-2024 - Present</small>
                    <h3>Limbic Technology <span>FullStack Developer<strong></strong> </span></h3>
                    
                    <p>Here I'm currently working on React js, React Native and Python + Django in Bhopal M.P. </p>
                </div>

                <div className={resumecss.education}>
                <small>July 2023–Aug 2023 </small>

                    <h3>Oasis Infobyte <span>Web Development Intern<strong></strong> </span></h3>
                    <p>Here I was working on frontend technologies React js, Three js, Tailwind css, Builtin APIs. </p>
                </div>
            </div>

            <div className={resumecss.Testimonials}>
            <h3 className='sectionheading'>
                <i className='ri-shining-fill'>Testimonials</i>
            </h3>
            <h1 className='section_Title'>What My <br />Teammates Say</h1>

            <Swiper 
            loop = {true}
            spaceBetween={20}
            slidesPerView={1}
            autoplay = {
            {
                delay: 2000,
            }
            }
            modules = {[Autoplay]}
            className={resumecss.Swiper}
            >
                <SwiperSlide>
                    <div className={resumecss.TestimonialWrapper}>
                        <div className={resumecss.Profile}>
                            <img src= {Testimonialimg1} alt="" />
                            <h3>Suraj kumar <span>working at TechnoTask</span></h3>
                        </div>
                        <p>Sahil Khan is a talented frontend developer with a strong technical foundation and excellent communication skills. His dedication and collaborative approach make him a valuable asset to any team.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={resumecss.TestimonialWrapper}>
                        <div className={resumecss.Profile}>
                            <img src= {Testimonialimg2} alt="" />
                            <h3>Rohit Singh <span>working at Axis Bank</span></h3>
                        </div>
                        <p>He is a proficient developer with a keen eye for detail and a strong ability to work well in teams. His technical skills and dedication to excellence set him apart.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Resume