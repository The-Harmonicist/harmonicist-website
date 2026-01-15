import './App.css'
import Hero from './Hero'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'
import Music from './music'
import Footer from './Footer'
import Order from './Order'
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div className="App">
       <NavBar />
      < Hero />
      <Music />
      <About />
      <Order />
        <Contact />
        <Footer />
        <Analytics />
    </div>
  )
}

export default App;
