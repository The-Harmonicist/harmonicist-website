import {useState} from 'react'
import './Order.css'
import './Harmonica.css';

function Harmonica() {
  return (
    <div className="harmonica">
      <div className="harmonica-end left"></div>
      <div className="harmonica-holes">
        {[...Array(10)].map((_, i) => (
          <div className="hole" key={i}></div>
        ))}
      </div>
      <div className="harmonica-end right"></div>
    </div>
  );
}

export default function Order (){

    const [selectedService, setSelectedService] = useState('')
    console.log(selectedService)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        songName: '',
        artist: '',
        key: ''
    })
    console.log(formData)

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted', formData);
    }



    return (
        <div className='service-card' id="tabs">
            <Harmonica />
            <div>
          <h2>Sign up & Order today!</h2>
            <button onClick={() => setSelectedService('tabs')}>Custom Tabs</button>
            <button onClick={() => setSelectedService('music')}>Custom Music/Tracks</button>
            <button onClick={() => setSelectedService ('sessions')}>Custom Sessions</button>

            {selectedService === 'tabs' && (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}/>

        <input 
            type="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Enter song name" 
            value={formData.songName}
            onChange={(e) => setFormData({...formData, songName: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Enter artist name" 
            value={formData.artist}
            onChange={(e) => setFormData({...formData, artist: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Enter music key"
            value={formData.key} 
            onChange={(e) => setFormData({...formData, key: e.target.value})}/>
            <p>You selected: Custom Tabs</p>
        <button type="submit">Submit Request</button>
    </form>
            )}

            {selectedService === 'music' && (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}/>

        <input 
            type="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Track Type (e.g. backing, full song)" 
            value={formData.trackType || ''}
            onChange={(e) => setFormData({...formData, trackType: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Genre"
            value={formData.genre || ''}
            onChange={(e) => setFormData({...formData, genre: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Duration (minutes)"
            value={formData.duration || ''}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}/>
        <button type="submit">Submit Request</button>
    </form>
            )}

            {selectedService === 'sessions' && (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}/>

        <input 
            type="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Session Type (e.g. lesson, recording)" 
            value={formData.sessionType || ''}
            onChange={(e) => setFormData({...formData, sessionType: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Preferred Date"
            value={formData.date || ''}
            onChange={(e) => setFormData({...formData, date: e.target.value})}/>

        <input 
            type="text" 
            placeholder="Preferred Time"
            value={formData.time || ''}
            onChange={(e) => setFormData({...formData, time: e.target.value})}/>
        <button type="submit">Submit Request</button>
    </form>
            )}
        {selectedService === 'music' && <p>You selected: Custom Music</p>}
        {selectedService === 'sessions' && <p>You selected: Custom Sessions</p>}
            </div>
        </div>
    )
}