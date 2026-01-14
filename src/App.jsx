import './App.css'
import Hero from './Hero'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'
import Music from './music'
import Footer from './Footer'
import Order from './Order'


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
     
    </div>
  )
}

export default App;
