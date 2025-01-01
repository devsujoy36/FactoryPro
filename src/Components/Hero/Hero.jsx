import { Helmet } from "react-helmet-async"
import './Hero.css'
const Hero = () => {
  return (
    <div id="hero" className="bg-cover bg-no-repeat h-dvh flex justify-center items-center text-white">
      <Helmet>
        <title>Factory Pro | Hero</title>
      </Helmet>
      <div>
        <h1 className="text-5xl font-bold">Excellence innovating</h1>
        <h1 className="text-2xl">industry for today</h1>
        <p className="text-xs">At the heart of our operations is a commitment to delivering superior products through cutting-
          edge technology and innovative processes.</p>
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default Hero