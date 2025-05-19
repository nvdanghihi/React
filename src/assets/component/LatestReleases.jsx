import React from 'react'

const albums = [
  { title: "Album One", image: "/assets/albums/album1.jpg" },
  { title: "Album Two", image: "/assets/albums/album2.jpg" },
  { title: "Album Three", image: "/assets/albums/album3.jpg" },
];
const LatestReleases = () => {
  return (
    <section id="releases" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Latest Releases</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {albums.map((album, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded">
              <img src={album.image} alt={album.title} className="w-full h-64 object-cover rounded mb-4" />
              <h3 className="text-xl">{album.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestReleases
