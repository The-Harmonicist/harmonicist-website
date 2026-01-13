import './music.css'

export default function Music (props) {
    return (
        <section className='music'>
            <h2>
                My Music
            </h2>
            <div className="albums-container">
            <iframe 
    data-testid="embed-iframe" 
    style={{borderRadius: '12px'}} 
    src="https://open.spotify.com/embed/album/5SpNJgi3E2kz11aIX8N6ea?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder={0}
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
></iframe>
<iframe 
    data-testid="embed-iframe" 
    style={{borderRadius: '12px'}} 
    src="https://open.spotify.com/embed/album/3JZyaOCsmcmQUeRYLqmzLk?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder={0}
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
></iframe>
<iframe 
    data-testid="embed-iframe" 
    style={{borderRadius: '12px'}} 
    src="https://open.spotify.com/embed/album/337pEIUd32r195NsWARbXM?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder={0}
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
></iframe>
<iframe 
    data-testid="embed-iframe" 
    style={{borderRadius: '12px'}} 
    src="https://open.spotify.com/embed/playlist/17NVGMDvSyycVIq5siAIm2?utm_source=generator&theme=0" 
    width="100%" 
    height="352" 
    frameBorder={0}
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
></iframe>
<iframe 
    data-testid="embed-iframe" 
    style={{borderRadius: '12px'}} 
    src="https://open.spotify.com/embed/playlist/1YZrwS3wUil58qcKHqoPep?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder={0}
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
></iframe>
<iframe 
    data-testid="embed-iframe" 
    style={{borderRadius: '12px'}} 
    src="https://open.spotify.com/embed/playlist/72Duc1d1lZOl19NY23gL1U?utm_source=generator" 
    width="100%" 
    height="352" 
    frameBorder={0}
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
></iframe>
</div>

        </section>
    )
}