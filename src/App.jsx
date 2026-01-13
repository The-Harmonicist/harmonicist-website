import './App.css'
import Hero from './Hero'
import NavBar from './navBar'
import About from './About'
import Contact from './Contact'
import Music from './music'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
       <NavBar />
      < Hero/>
      <About />
      <Music />
        <Contact />
        <Footer />
     
    </div>
  )
}

export default App;
