import './Contact.css'
import { FaSpotify, FaYoutube, FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaSoundcloud, FaSteam, FaDiscord} from 'react-icons/fa6'
import imageName from './assets/The-Harmonicist.png'
import { SiFiverr } from 'react-icons/si'
export default function Contact (){
    return (
        <section className='contact' id="contact">
            <h2>Connect With Me</h2>
            <div className='social-links'>
            <a href='https://open.spotify.com/artist/0lVjh4CmJqd1OvhfnSTtIH?si=MiIP7dacR7O2THpFuamuTQ' target='_blank'><FaSpotify /></a>
            <a href='https://www.youtube.com/@TheHarmonicaMusician' target='_blank'><FaYoutube /></a>
            <a href='https://facebook.com/harmonicamusiciancomposer' target='_blank'><FaFacebook /></a>
            <a href='https://instagram.com/the_harmonicist' target='_blank'><FaInstagram /></a>
            <a href='https://tiktok.com/@the_harmonicist' target='_blank'><FaTiktok /></a>
            <a href='https://x.com/THarmonicist' target='_blank'><FaXTwitter /></a>
            <a href='https://soundcloud.com/user-619787001' target='_blank'><FaSoundcloud /></a>
            <a href='https://steamcommunity.com/id/THarmonicist' target='_blank'><FaSteam /></a>
            <a href='https://discordapp.com/users/the_harmonicist' target='_blank'><FaDiscord /></a>
            </div>
            <div className="business-section">
                <h3>Business Inquiries</h3>
                <p>Email: <a href='mailto:agmultimediastudio@yahoo.com'>agmultimediastudio@yahoo.com</a></p>
                <p>Hire me on <a href="https://www.fiverr.com/s/429o8dd"><SiFiverr /></a> </p>
            </div>
            <img className='contact-img' src={imageName} alt='harmonica' />
        </section>
    )
}