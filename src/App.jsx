import './App.css'
import { Analytics } from '@vercel/analytics/react'
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
        <Analytics />
     
    </div>
  )
}

export default App;
