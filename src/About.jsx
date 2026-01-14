import './About.css'
import imageName from './assets/83456203_10221349077451561_6792593372507799552_n.jpg'

export default function About (){
    return (
        <section className='aboutMe' id="about">
            <h2>About The Harmonicist</h2>
            <p>The Harmonicist is a diatonic harmonica (i.e. 10-hole) player musician and composer based in Los Angeles, CA. Having picked up and played his first harmonica since Christmas 2011, he slowly developed his Youtube channel "The Harmonicist" from 2017 making video game covers, particularly Undertale, while he was learning and studying music theory on the tiny, underrated, reed instrument. He learned how to write tabs for songs and later, shortly after 2020, making his own beats/instrumentals for his original compositions (i.e.    and covers like . His musicianship now ranges from all sorts of different genres, including Hip Hop, VGM, Electro/Techno, and even Spanish like Cumbia doing what he loves doing the most, making music 🎶</p>
            <img className='angel-img' src={imageName} alt='Angel'  />
            <p></p>
            <p></p>
        </section>
    )
}