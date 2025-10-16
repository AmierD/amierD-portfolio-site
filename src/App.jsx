import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

function App() {

  return (
    <>
      {/* viewport for mobile responsiveness + disable zoom */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </>
  )
}

export default App
