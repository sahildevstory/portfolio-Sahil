import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Portfolio from './components/Portfolio/Portfolio'
import Profile from './components/Profile/Profile'
import Resume from './components/Resume/Resume'

function App() {
 

  return (
    <>
     <Profile/>
     <div className="Main_Wrapper">
      <Main/>
      <Header/>
      <Portfolio/>
      <About/>
      <Resume/>
      <Contact/>
     </div>
    </>
  )
}

export default App
