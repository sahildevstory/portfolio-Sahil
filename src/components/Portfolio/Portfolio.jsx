import React from 'react'
import portfolioCSS from './../Portfolio/Portfolio.module.css' 
import Portfolio1 from './../../assets/1.png'
import Portfolio2 from './../../assets/2.png'
import Portfolio3 from './../../assets/3.png'
import Portfolio4 from './../../assets/4.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className={`${portfolioCSS.PortfolioWrapper} section`}>
         <h3 className='sectionheading'>
            <i className='ri-shining-fill'>Portfolio</i>
        </h3>
        <h1 className='section_Title'>Check Out My <br />Featured Projects</h1>
        <div className={portfolioCSS.portfolioCards}>

            <div className={portfolioCSS.card}>
                <img src= {Portfolio1} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
w                    <span onClick={() => window.open('https://github.com/SahilKhan44/mern-blog-app/', '_blank')}>GitHub</span>
                    <span onClick={() => window.open('https://sahils-blog.onrender.com/', '_blank')}>Live Link</span>
                </div>
            </div>

            <div className={portfolioCSS.card}>
                <img src= {Portfolio2} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
                    <span  onClick={() => window.open('https://github.com/SahilKhan44/Resume-Builder', '_blank')}>GitHub</span>
                    <span onClick={() => window.open('https://resume-builder-lac-seven.vercel.app/', '_blank')}>Live Link</span>
                </div>
            </div>

            <div className={portfolioCSS.card}>
                <img src= {Portfolio3} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
                <span  onClick={() => window.open('https://github.com/SahilKhan44/Giphy-App','_blank')}>GitHub</span>
                <span onClick={() => window.open('https://giphy-appapi.netlify.app/signin', '_blank')}>Live Link</span>
                </div>
            </div>

            <div className={portfolioCSS.card}>
                <img src= {Portfolio4} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
                <span  onClick={() => window.open('https://github.com/SahilKhan44/Portfolio','_blank')}>GitHub</span>
                <span onClick={() => window.open('https://whoissahilkhan.netlify.app/', '_blank')}>Live Link</span>
                </div>
            </div>
            <button onClick={() => window.open('https://github.com/SahilKhan44', '_blank')}>Check it Out on Github
            <i className='ri-external-link-line'></i>
        </button>
        </div>
    </div>
  )
}

export default Portfolio