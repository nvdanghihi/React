import React from 'react'

const images = [
  "/assets/instagram/instar1.jpg",
  "/assets/instagram/instar2.jpg",
  "/assets/instagram/instar3.jpg",
  "/assets/instagram/instar4.jpg",
  "/assets/instagram/instar5.jpg",
  "/assets/instagram/instar6.jpg",
];
const InstagramFeed = () => {
  return (
     <section id="instagram" className="bg-black py-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Instagram Feed</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`insta-${idx}`} className="w-full h-48 object-cover rounded" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed
