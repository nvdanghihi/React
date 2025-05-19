import React from 'react'

const Hero = () => {
  return (
     <section id="hero" className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/hero/hero-bg.jpg')" }}>
      <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-5xl font-bold mb-4">Feel The Beat</h1>
        <p className="text-xl mb-6">New album out now – listen everywhere</p>
        <a href="#releases" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">Listen Now</a>
      </div>
    </section>
  );
}

export default Hero
