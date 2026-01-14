import './App.css'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Hero from './Hero'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'
import Music from './music'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
       <NavBar />
      < Hero />
      <Music />
      <About />
        <Contact />
        <Footer />
        <SpeedInsights />
     
    </div>
  )
}

export default App;
