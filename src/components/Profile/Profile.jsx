import React from 'react'
import profileCSS from './../Profile/Profile.module.css'
import HeroImg from './../../assets/log.jpg'

const Profile = () => {
    return (
        
        <div id='home' className={profileCSS.ProfileWrapper}>
                       

            <h2>Sahil Khan</h2>
            <div className={profileCSS.headerImg}>
                <img src={HeroImg} alt="Image" />
            </div>
            <div className={profileCSS.specialization}>
                <p>Specialization In</p>
                <h3>FullStack Developer <br />and <br />App Developer </h3>
            </div>
            <div className={profileCSS.social}>
                <p>Follow me on Social media Platform</p>
                <div className={profileCSS.socialIcons}>
                    <a href="https://www.instagram.com/be__sahil" target="_blank" rel="noopener noreferrer">
                        <i className='ri-instagram-line'></i>
                    </a>
                    <a href="https://leetcode.com/u/Sahil_Khan44/" target="_blank" rel="noopener noreferrer">
                        <i className='ri-code-s-slash-line'></i>
                    </a>
                    <a href="https://github.com/SahilKhan44" target="_blank" rel="noopener noreferrer">
                        <i className='ri-github-line'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sahil-khan-34b069258/" target="_blank" rel="noopener noreferrer">
                        <i className='ri-linkedin-line'></i>
                    </a>
                    <a href="https://x.com/Be_Sahil_" target="_blank" rel="noopener noreferrer">
                        <i className='ri-twitter-line'></i>
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/sahil_44/" target="_blank" rel="noopener noreferrer">
                        <i className='ri-terminal-box-line'></i>
                    </a>
                </div>
            </div>
            <a href="https://github.com/SahilKhan44" target="_blank" rel="noopener noreferrer">
                <button>Let's Works Together *</button>
            </a>

        </div>
    )
}

export default Profile