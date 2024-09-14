import React from 'react'
import mainCSS from './Main.module.css'

const Main = () => {
    const Darkmode = () => {
        document.querySelector('body').setAttribute('data-theme','Dark');
    }

    const Lightmode = () =>{
        document.querySelector('body').setAttribute('data-theme','Light')
    }

    const ThemeHandler = () => {
        if(document.querySelector('body').getAttribute('data-theme') === 'Light'){
            Darkmode();
        }else{
            Lightmode();
        }
    }

    //calling Light mode by default
    Lightmode();
    return (
        
        <div className={mainCSS.navbar}>
            <ul>
                <li><a href="#home"><span>Home</span> <i className='ri-home-line'></i></a></li>
                <li><a href="#about"><span>About Us</span> <i className='ri-user-line'></i></a></li>
                <li><a href="#portfolio"><span>Portfolio</span> <i className='ri-user-4-line'></i></a></li>
                <li><a href="#resume"><span>Resume</span> <i className='ri-file-list-line'></i></a></li>
                <li><a href="#contact"><span>Contact Us</span> <i className='ri-contacts-book-line'></i></a></li>
                <li id={mainCSS.nav_ThemeBtn} onClick={ThemeHandler}>
                    <i className='ri-sun-line'></i>
                </li>
            </ul>
            <div className={mainCSS.navBtns}>
                <i className='ri-sun-line' onClick={ThemeHandler}></i>
                <a href="https://t.me/sahilkhan440" target="_blank">

                <button>Let's Talk</button>
                {/* <i className='ri-menu-3-line' id = {mainCSS.bars}></i> */}
                </a>

            </div>
        </div>
    )
}

export default Main