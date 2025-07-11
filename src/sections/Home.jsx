import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect && window.THREE) {
      setVantaEffect(
        BIRDS({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0xf0f0f0,
            quantity: 4,              // You can increase for more birds
            separation: 100.0,        // High separation keeps them apart
            alignment: 0.0,           // Lower = less tendency to fly in same direction
            cohesion: 0.0,            // Lower = less tendency to group
            backgroundAlpha: 1.0,
            color1: 0x3366ff,
            color2: 0xff66cc
            })

      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} className="min-h-screen w-full relative">
      <section
        id="home"
        className="relative z-10 min-h-screen w-full pt-20 px-6 md:px-0 md:pt-50"
      >
        <div className="flex flex-col-reverse justify-around items-center md:flex-row gap-3.5 md:gap-0">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
              Hi, I'm <span className="text-blue-600">Indresh Vikram Bipul</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-rose-600 mb-12">Full Stack Developer</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm passionate about building exceptional digital experiences that make an impact. <br />
              I specialize in creating responsive, user-friendly applications with clean, efficient code.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-15">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="indbip.jpg"
                alt="Professional portrait of Indresh Vikram Bipul, a full stack developer"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#cv" className="px-4 py-3 border border-blue-600 text-blue-600 rounded-md text-c hover:bg-blue-50 transition duration-300 text-center">
                My Resume
              </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
