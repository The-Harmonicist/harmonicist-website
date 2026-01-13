 import './Hero.css';
 import imageName from './assets/The-Harmonicist.png'

 export default function Hero (){
    return (
        <div className = "hero">
             <h1>The Harmonicist</h1>
      <p>Music Artist</p> 
            <h2>Welcome to the Harmonicist's World</h2>
            <img className='hero-img' src={imageName} alt='harmonica' />
        </div>
    )
}

