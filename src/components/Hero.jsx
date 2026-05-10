import { useEffect } from 'react'
import { useRef } from 'react'

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if(videoRef.current) {
      videoRef.current.playBackRate = 0.5;
    }
  }, [])
  return (
    <section id='hero'>
        <div>
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="Macbook Pro" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay playsInline muted></video>
        <button>Buy</button>
        <p>From $1599 to $133/mo for 12 months</p>
    </section>
  )
}

export default Hero
