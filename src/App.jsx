import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

function App() {
  const resumePath = "./assets/AmierDResume101925.pdf";
  return (
    <>
      {/* viewport for mobile responsiveness + disable zoom */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <Navbar resumePath={resumePath} />
        {/* 
          TODO: add some way to view different versions of the site
          potentially by having different versions of each part of the site
          and having a button that allows the user to switch between them
        */}
        <Hero resumePath={resumePath} />
        <Projects />
        <About />
        <Contact />
        {/* TODO: add footer */}
    </>
  )
}

export default App
