import React from 'react'
import headerCSS from './../Header/Header.module.css'

const Header = () => {
  return (
    <div className={`${headerCSS.HeaderWrapper} section`}>
        <h3 className='sectionheading'>
            <i className='ri-shining-fill'>Let's Meet</i>
        </h3>
        <h1 className='section_Title'>I'm Sahil Khan <br /> FullStack Developer and <br /> UI / UX Designer</h1>

        <div className={headerCSS.header_btns}>
            <button  onClick={() => window.open('https://github.com/SahilKhan44', '_blank')}>
                <span>My Works</span>
                <i className='ri-layout-grid-line'></i>
            </button>

            <button onClick={() => window.open('https://drive.google.com/file/d/1EqoJgbhPW8rtqhIqFZTOHuaD4YCf5zDY/view?usp=sharing', '_blank')}>
                <span>Download Resume</span>
                <i className='ri-download-line'></i>
            </button>
        </div>
    </div>
  )
}

export default Header